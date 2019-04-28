const React = require('react');

const {Link} = require('./Link');

const TopPage = (props) => {
  const {
    generateClickOfLinkHandler,
  } = props;

  return (
    <>
      <ul>
        <li>
          <Link
            label="useState"
            handleClickOfLink={generateClickOfLinkHandler('use-state')}
          />
        </li>
        <li>
          <Link
            label="Back to the Top"
            handleClickOfLink={generateClickOfLinkHandler('top')}
          />
        </li>
      </ul>
    </>
  );
};

module.exports = {
  TopPage,
};
