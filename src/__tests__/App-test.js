import {
  afterEach,
  beforeEach,
  describe,
  it,
} from 'mocha';

import {
  ejectJsDom,
  injectJsDom,
} from '../unit-test-helper';
import {usePopStateEffect} from '../App';

const assert = require('assert');
const React = require('react');
const ReactDOM = require('react-dom');
const sinon = require('sinon');

describe('App.js', function() {
  beforeEach(function() {
    injectJsDom();
  });

  afterEach(function() {
    ejectJsDom();
  });

  describe('usePopStateEffect', function() {
    function TestComponent({handlePopState}) {
      usePopStateEffect({handlePopState});
      return React.createElement('div');
    };

    let destination;
    let stubbedAddEventListener;
    let stubbedRemoveEventListener;

    beforeEach(function() {
      destination = document.createElement('div');
      document.body.appendChild(destination);

      stubbedAddEventListener = sinon.stub(window, 'addEventListener');
      stubbedRemoveEventListener = sinon.stub(window, 'removeEventListener');
    });

    afterEach(function() {
      stubbedAddEventListener.restore();
      stubbedRemoveEventListener.restore();
      ejectJsDom();
    });

    it('should call `addEventListener` only once', async function() {
      async function render() {
        return new Promise(resolve => {
          ReactDOM.render(
            React.createElement(TestComponent, {handlePopState: () => {}}),
            destination,
            () => {
              //
              // This setTimeout execution is needed for the useEffect in the following reason.
              // https://github.com/facebook/react/issues/14050#issuecomment-443234456
              //
              // TODO: Use react-test-renderer
              //       https://github.com/facebook/react/issues/14050#issuecomment-447888631
              //
              setTimeout(() => {
                resolve();
              }, 100);
            }
          );
        });
      }

      assert.strictEqual(stubbedAddEventListener.callCount, 0);
      await render();
      assert.strictEqual(stubbedAddEventListener.callCount, 1);
      await render();
      assert.strictEqual(stubbedAddEventListener.callCount, 1);
    });

    it('should call `removeEventListener` when unmounting the component', async function() {
      async function render() {
        return new Promise(resolve => {
          ReactDOM.render(
            React.createElement(TestComponent, {handlePopState: () => {}}),
            destination,
            () => {
              //
              // This setTimeout execution is needed for the useEffect in the following reason.
              // https://github.com/facebook/react/issues/14050#issuecomment-443234456
              //
              // TODO: Use react-test-renderer
              //       https://github.com/facebook/react/issues/14050#issuecomment-447888631
              //
              setTimeout(() => {
                resolve();
              }, 100);
            }
          );
        });
      }

      assert.strictEqual(stubbedRemoveEventListener.callCount, 0);
      await render();
      ReactDOM.unmountComponentAtNode(destination);
      assert.strictEqual(stubbedRemoveEventListener.callCount, 1);
    });
  });
});
