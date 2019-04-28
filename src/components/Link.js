const React = require('react');

const Link = (props) => {
  const {
    handleClickOfLink,
    label,
  } = props;

  return (
    <a
      href="javascript:void 0"
      onClick={handleClickOfLink}
    >{label}</a>
  );
};

module.exports = {
  Link,
};
