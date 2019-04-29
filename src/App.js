import {Root} from './components/Root';
import {TopPage} from './components/TopPage';
import {UseStatePage} from './components/UseStatePage';
import {
  parsePageIdFromUrl,
  pushStateToHistory,
} from './utils';

const React = require('react');

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
    },
    handlePopState: () => {
      const pageId = parsePageIdFromUrl(window.location.href);

      setState(state => Object.assign({}, state, {pageId}));
    },
  };
};

export function usePopStateEffect(props) {
  const {handlePopState} = props;

  React.useEffect(() => {
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}

export function App(settings) {
  const [state, setState] = React.useState(settings.initialState);

  const pageId = state.pageId || parsePageIdFromUrl(settings.initialUrl);
  const route = findRoute(routes, pageId);

  const rootAndPageProps = mapStateToRootAndPageProps(state, setState);

  usePopStateEffect({
    handlePopState: rootAndPageProps.handlePopState,
  });

  return React.createElement(
    Root,
    rootAndPageProps,
    React.createElement(
      route.pageComponent,
      rootAndPageProps,
    )
  );
};
