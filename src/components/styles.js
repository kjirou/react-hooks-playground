const heading1BackgroundColor = '#ccc';
const heading2BackgroundColor = '#ddd';
const heading3BackgroundColor = '#eee';

const baseFontSize = '24px';
const baseItemHeight = '48px';

const headingStyles = [
  heading1BackgroundColor,
  heading2BackgroundColor,
  heading3BackgroundColor,
].map(backgroundColor => {
  return {
    height: baseItemHeight,
    lineHeight: baseItemHeight,
    fontSize: baseFontSize,
    textAlign: 'center',
    backgroundColor,
  };
});

const itemStyle = {
  height: baseItemHeight,
  lineHeight: baseItemHeight,
  fontSize: baseFontSize,
  textAlign: 'center',
};

module.exports = {
  headingStyles,
  itemStyle,
};
