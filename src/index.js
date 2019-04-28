const React = require('react');
const ReactDOM = require('react-dom');

const {TopPage} = require('./components/TopPage');
const {UseStatePage} = require('./components/UseStatePage');

const routes = {
  top: {
    pageComponent: TopPage,
  },
  'use-state': {
    pageComponent: UseStatePage,
  },
};

const findRoute = (routes, pageId) => {
  const found = routes[pageId];

  return found;

  // TODO: 404
};

/**
 * Parse an identifier for paging from "page-id={pageId}" in an absolute url
 *
 * In the case of the GitHub Pages, any url without a resource returns 404.
 * So this SPA application can not use the "path" data for the routing.
 *
 * @param url {string} An absolute url.
 * @return {string|null}
 */
const parsePageIdFromUrl = (url) => {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search.slice(1));
  return params.get('page-id') || 'top';
};

const pushStateToHistory = (pageId) => {
  // TODO: ZATSU
  window.history.pushState(null, null, `?page-id=${window.encodeURIComponent(pageId)}`);
};

const mapStateToPageProps = (state, setState) => {
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

const App = (settings) => {
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

  const pageProps = mapStateToPageProps(state, setState);

  return React.createElement(route.pageComponent, pageProps);
};

const createInitialAppState = () => {
  return {
    pageId: null,
  };
};

window.addEventListener('DOMContentLoaded', () => {
  const appSettings = {
    initialState: createInitialAppState(),
    initialUrl: window.location.href,
  };

  ReactDOM.render(
    React.createElement(App, appSettings),
    document.querySelector('.js-app')
  );
});
