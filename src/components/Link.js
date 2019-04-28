const React = require('react');

const Link = (props) => {
  const {
    handleClickOfLink,
    label,
    style = {},
  } = props;

  return (
    <a
      href="javascript:void 0"
      onClick={handleClickOfLink}
      style={style}
    >{label}</a>
  );
};

module.exports = {
  Link,
};
