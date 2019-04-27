const React = require('react');
const ReactDOM = require('react-dom');

const {UseStatePage} = require('./pages/UseStatePage');
const {TopPage} = require('./pages/TopPage');

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

const routes = {
  'use-state': {
    pageComponent: UseStatePage,
  },
  top: {
    pageComponent: TopPage,
  },
};

const findRoute = (routes, pageId) => {
  const found = routes[pageId];

  return found;

  // TODO: 404
};

const mapStateToPageProps = (state, setState) => {
  return {
  };
};

const App = (settings) => {
  const [state, setState] = React.useState(settings.initialState);

  const pageId = state.pageId
    ? state.pageId
    : parsePageIdFromUrl(settings.initialUrl);
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
