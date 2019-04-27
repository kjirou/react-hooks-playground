const React = require('react');
const ReactDOM = require('react-dom');

const App = () => {
  return <div>Hello, React app!</div>;
};

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App, {}),
    document.querySelector('.js-app')
  );
});
