import {Link} from './Link';
import {headingStyles} from './styles';

const React = require('react');

export const Root = (props) => {
  const {
    children,
    generateClickOfLinkHandler,
  } = props;

  const style = {
    margin: '0 auto',
    width: 360,
    minHeight: 640,
  };

  const pageFrameStyle = {
    position: 'relative',
  };

  return (
    <div style={style}>
      <nav>
        <h1 style={headingStyles[0]}>
          <Link
            label="React Hooks Playground"
            handleClickOfLink={generateClickOfLinkHandler('top')}
          />
        </h1>
      </nav>
      <div style={pageFrameStyle}>{children}</div>
    </div>
  );
};
