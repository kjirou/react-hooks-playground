const React = require('react');

const {Link} = require('../Link');

const TopPage = (props) => {
  const {
    generateClickOfLinkHandler,
  } = props;

  return (
    <>
      <h1>react-hooks-playground</h1>
      <ul>
        <li>
          <Link
            label="useState"
            handleClickOfLink={generateClickOfLinkHandler('use-state')}
          />
        </li>
      </ul>
    </>
  );
};

module.exports = {
  TopPage,
};
