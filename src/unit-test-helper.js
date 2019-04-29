const jsdom = require('jsdom');

export function injectJsDom() {
  const window = new jsdom.JSDOM('<html><body></body></html>').window;
  const document = window.document;

  global.window = window;
  global.document = document;
}

export function ejectJsDom() {
  delete global.window;
  delete global.document;
}
