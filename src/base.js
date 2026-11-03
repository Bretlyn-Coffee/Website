// Where the site is served from, worked out at runtime from the location of the
// compiled JS bundle (<root>/static/*.js). "/" on bretlyn.com, or e.g.
// "/Bretlyn%20Coffee%20Website/" inside XAMPP's htdocs. Lets one build run anywhere.
export const BASE = (() => {
  if (import.meta.env.DEV) return '/';
  try { return new URL('../', import.meta.url).pathname; } catch { return '/'; }
})();

/** Build a URL to a file in public/, e.g. asset('assets/img/logo.svg'). */
export const asset = (p) => BASE + String(p).replace(/^\/+/, '');
