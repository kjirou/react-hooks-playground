const React = require('react');
const ReactDOM = require('react-dom');

const TopPage = () => {
  return (
    <>
      <h1>react-hooks-playground</h1>
      <ul>
        <li><a href="?page-id=use-state">useState</a></li>
      </ul>
    </>
  );
};

module.exports = {
  TopPage,
};
