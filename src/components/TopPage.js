const React = require('react');

const {Link} = require('./Link');
const {
  headingStyles,
  itemStyle,
} = require('./styles');

const TopPage = (props) => {
  const {
    generateClickOfLinkHandler,
  } = props;

  return (
    <div>
      <h2 style={headingStyles[1]}>Examples</h2>
      <ul>
        <li style={itemStyle}>
          <Link
            label="useState"
            handleClickOfLink={generateClickOfLinkHandler('use-state')}
          />
        </li>
        <li style={itemStyle}>
          <Link
            label="Foo"
            handleClickOfLink={generateClickOfLinkHandler('use-state')}
          />
        </li>
        <li style={itemStyle}>
          <Link
            label="Bar"
            handleClickOfLink={generateClickOfLinkHandler('use-state')}
          />
        </li>
      </ul>
    </div>
  );
};

module.exports = {
  TopPage,
};
