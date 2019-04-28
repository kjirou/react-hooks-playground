const React = require('react');

const {Link} = require('./Link');

const TopPage = (props) => {
  const {
    generateClickOfLinkHandler,
  } = props;

  const headingStyle = {
    height: '48px',
    fontSize: '24px',
    lineHeight: '48px',
    textAlign: 'center',
    backgroundColor: '#EEE',
  };

  const itemStyle = {
    height: '48px',
    fontSize: '24px',
    lineHeight: '48px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={headingStyle}>Examples</h2>
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
