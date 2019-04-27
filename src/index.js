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

const App = () => {
  const path = window.location.pathname;

  const route = findRouteFromPath(routes, path);

  return React.createElement(route.pageComponent);
};

window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(App, {}),
    document.querySelector('.js-app')
  );
});
