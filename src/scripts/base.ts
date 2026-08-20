/* ==========================================================================
   全ページ共通の下地
   --------------------------------------------------------------------------
   1. ページ遷移で白飛びさせない（ホームだけ凝っていて中が素っ気ない、を防ぐ）
   2. 計測イベントを1箇所で拾う（各所にJSを書くと必ず抜けが出る）
   ========================================================================== */

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* --- 1. ページ遷移 ------------------------------------------------------- */

// 入場：一瞬だけ沈んだ状態から浮かび上がらせる
document.documentElement.classList.add("is-entering");
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.documentElement.classList.remove("is-entering");
  });
});

if (!reduced) {
  document.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;

    const href = a.getAttribute("href");
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      a.target === "_blank" ||
      a.hasAttribute("data-no-transition") ||
      e.metaKey || e.ctrlKey || e.shiftKey
    ) return;

    // 外部リンクは素通し
    const url = new URL(href, location.href);
    if (url.origin !== location.origin) return;

    e.preventDefault();
    document.documentElement.classList.add("is-leaving");
    window.setTimeout(() => { location.href = href; }, 240);
  });

  // 戻るボタンで白いままになるのを防ぐ
  window.addEventListener("pageshow", (e) => {
    if ((e as PageTransitionEvent).persisted) {
      document.documentElement.classList.remove("is-leaving", "is-entering");
    }
  });
}

/* --- 2. 計測 ------------------------------------------------------------- */
/* data-track / data-shop 属性を1箇所で拾う（イベント委譲）。
   GA4 / Clarity 導入後にここから両方へ送る。 */

document.addEventListener("click", (e) => {
  const el = (e.target as HTMLElement).closest<HTMLElement>("[data-track]");
  if (!el) return;
  const payload = {
    event: el.dataset.track,
    shop_slug: el.dataset.shop ?? null,
    category: document.body.dataset.category ?? null,
  };
  // TODO: gtag("event", payload.event, payload); clarity("event", payload.event);
  console.debug("[track]", payload);
});
