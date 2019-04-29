const React = require('react');
const ReactDOM = require('react-dom');

const {App} = require('./App');

const createInitialAppState = () => {
  return {
    pageId: null,
  };
};

window.addEventListener('DOMContentLoaded', () => {
  const appSettings = {
    initialState: createInitialAppState(),
    initialUrl: window.location.href,
  };

  ReactDOM.render(
    React.createElement(App, appSettings),
    document.querySelector('.js-app')
  );
});
