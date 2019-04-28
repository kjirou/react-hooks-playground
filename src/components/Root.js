const React = require('react');

const {Link} = require('./Link');

const Root = (props) => {
  const {
    children,
    generateClickOfLinkHandler,
  } = props;

  const style = {
    margin: '0 auto',
    width: 360,
    minHeight: 640,
  };

  const navStyle = {
    height: 48,
    backgroundColor: '#ccc',
    textAlign: 'center',
  };

  const navLinkStyle = {
    lineHeight: '48px',
    fontSize: '24px',
  };

  const pageFrameStyle = {
    position: 'relative',
  };

  return (
    <div style={style}>
      <nav style={navStyle}>
        <Link
          style={navLinkStyle}
          label="React Hooks Playground"
          handleClickOfLink={generateClickOfLinkHandler('top')}
        />
      </nav>
      <div style={pageFrameStyle}>{children}</div>
    </div>
  );
};

module.exports = {
  Root,
};
