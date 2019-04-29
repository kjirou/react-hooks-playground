import {App} from './App';
import {createApplicationState} from './state-manager';

const React = require('react');
const ReactDOM = require('react-dom');

window.addEventListener('DOMContentLoaded', () => {
  const appSettings = {
    initialState: createApplicationState(),
    initialUrl: window.location.href,
  };

  ReactDOM.render(
    React.createElement(App, appSettings),
    document.querySelector('.js-app')
  );
});
