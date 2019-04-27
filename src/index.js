const React = require('react');
const ReactDOM = require('react-dom');

const {UseStatePage} = require('./pages/UseStatePage');

const routes = [
  {
    // TODO: Tmp
    pathMatcher: /.*/,
    //pathMatcher: /\/use-state\/?$/,
    pageComponent: UseStatePage,
  },
];

/**
 * @param path {string} A root-relative path.
 *                      Note that the so-called "public-url" is probably "/my-repo-name/" instead of "/".
 */
const findRouteFromPath = (routes, path) => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.pathMatcher.test(path)) {
      return route;
    }
  }

  // TODO: 404
};

const mapStateToPageProps = (state, setState) => {
  return {
  };
};

const App = (settings) => {
  const [state, setState] = React.useState(settings.initialState);

  const path = state.path === undefined ? settings.initialPath : state.path;
  const route = findRouteFromPath(routes, path);

  const pageProps = mapStateToPageProps(state, setState);

  return React.createElement(route.pageComponent, pageProps);
};

const createInitialAppState = () => {
  return {
    path: undefined,
  };
};

window.addEventListener('DOMContentLoaded', () => {
  const appSettings = {
    initialPath: window.location.pathname,
    initialState: createInitialAppState(),
  };

  ReactDOM.render(
    React.createElement(App, appSettings),
    document.querySelector('.js-app')
  );
});
