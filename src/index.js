const React = require('react');
const ReactDOM = require('react-dom');

const {UseStatePage} = require('./pages/UseStatePage');

const App = () => {
  return (
    <UseStatePage />
  );
};

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App, {}),
    document.querySelector('.js-app')
  );
});
