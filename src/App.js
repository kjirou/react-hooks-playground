const React = require('react');

const {Root} = require('./components/Root');
const {TopPage} = require('./components/TopPage');
const {UseStatePage} = require('./components/UseStatePage');
import {
  parsePageIdFromUrl,
  pushStateToHistory,
} from './utils';

const routes = {
  top: {
    pageComponent: TopPage,
  },
  'use-state': {
    pageComponent: UseStatePage,
  },
};

function findRoute(routes, pageId) {
  const found = routes[pageId];

  return found;

  // TODO: 404
};

function mapStateToRootAndPageProps(state, setState) {
  return {
    generateClickOfLinkHandler: (pageId) => {
      const handleClickOfLink = () => {
        pushStateToHistory(pageId);
        setState(state => Object.assign({}, state, {
          pageId,
        }));
      };
      return handleClickOfLink;
    }
  };
};

export function App(settings) {
  const [state, setState] = React.useState(settings.initialState);

  // Set "popstate" effect
  React.useEffect(() => {
    const handlePopState = () => {
      const pageId = parsePageIdFromUrl(window.location.href);

      setState(state => Object.assign({}, state, {
        pageId,
      }));
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const pageId = state.pageId || parsePageIdFromUrl(settings.initialUrl);
  const route = findRoute(routes, pageId);

  const rootAndPageProps = mapStateToRootAndPageProps(state, setState);

  return React.createElement(
    Root,
    rootAndPageProps,
    React.createElement(
      route.pageComponent,
      rootAndPageProps,
    )
  );
};
