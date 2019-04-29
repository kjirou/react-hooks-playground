const heading1BackgroundColor = '#ccc';
const heading2BackgroundColor = '#ddd';
const heading3BackgroundColor = '#eee';

const baseFontSize = '24px';
const baseItemHeight = '48px';

export const headingStyles = [
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

export const itemStyle = {
  height: baseItemHeight,
  lineHeight: baseItemHeight,
  fontSize: baseFontSize,
  textAlign: 'center',
};
