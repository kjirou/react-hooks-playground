const React = require('react');

const {Link} = require('./Link');

const Root = (props) => {
  const {
    children,
    generateClickOfLinkHandler,
  } = props;

  return (
    <>
      <nav>
        <Link
          label="React Hooks Playground"
          handleClickOfLink={generateClickOfLinkHandler('top')}
        />
      </nav>
      <div>{children}</div>
    </>
  );
};

module.exports = {
  Root,
};
