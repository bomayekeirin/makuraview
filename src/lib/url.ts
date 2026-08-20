const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return BASE.endsWith("/") ? BASE + p : `${BASE}/${p}`;
}
