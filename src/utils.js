/*
 * This file MUST NOT depend on any file in the project.
 */

/**
 * Parse an identifier for paging from "page-id={pageId}" in an absolute url
 *
 * In the case of the GitHub Pages, any url without a resource returns 404.
 * So this SPA application can not use the "path" data for the routing.
 *
 * @param url {string} An absolute url.
 * @return {string|null}
 */
export function parsePageIdFromUrl(url) {
  const urlObj = new URL(url);
  const params = new URLSearchParams(urlObj.search.slice(1));
  return params.get('page-id') || 'top';
};

export function pushStateToHistory(pageId) {
  // TODO: ZATSU
  window.history.pushState(null, null, `?page-id=${window.encodeURIComponent(pageId)}`);
};
