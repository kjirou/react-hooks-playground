const React = require('react');
const ReactDOM = require('react-dom');

const {createApplicationState} = require('./state-manager');
const {App} = require('./App');

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
