// Where the site is served from, worked out at runtime from the location of the
// compiled JS bundle (<root>/static/*.js). "/" on bretlyn.com, or e.g.
// "/Bretlyn%20Coffee%20Website/" inside XAMPP's htdocs. Lets one build run anywhere.
export const BASE = (() => {
  if (import.meta.env.DEV) return '/';
  try { return new URL('../', import.meta.url).pathname; } catch { return '/'; }
})();

/** Build a URL to a file in public/, e.g. asset('assets/img/logo.svg'). */
// Images get a per-build version tag so browsers and the CDN fetch fresh copies after
// every deploy instead of showing a cached old photo with the same file name.
const VER = typeof __BUILD_ID__ !== 'undefined' ? __BUILD_ID__ : '';
export const asset = (p) => {
  const url = BASE + String(p).replace(/^\/+/, '');
  return VER && /\.(jpe?g|png|webp|svg)$/i.test(url) ? `${url}?v=${VER}` : url;
};
