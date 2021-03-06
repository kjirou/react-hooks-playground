const React = require('react');

export function Link(props) {
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
