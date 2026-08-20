/**
 * slugの重複・形式チェック。
 * 手作業のミスをここで止める。エラーならビルドを失敗させる。
 */
import { SHOPS } from "../src/data/shops.ts";

const slugs = SHOPS.map((s) => s.slug);
const dup = [...new Set(slugs.filter((s, i) => slugs.indexOf(s) !== i))];
const bad = slugs.filter((s) => !/^[a-z0-9-]+$/.test(s));
const long = slugs.filter((s) => s.length > 30);

console.log(`店舗数: ${slugs.length}`);
let ng = false;
if (dup.length) { console.error(`✗ slugが重複: ${dup.join(", ")}`); ng = true; }
if (bad.length) { console.error(`✗ 形式違反（小文字英数とハイフンのみ）: ${bad.join(", ")}`); ng = true; }
if (long.length) { console.error(`✗ 30文字超: ${long.join(", ")}`); ng = true; }
if (ng) process.exit(1);
console.log("✓ slugチェック通過");
