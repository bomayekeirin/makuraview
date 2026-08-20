export type CategoryId = "go" | "eat" | "drink" | "beauty" | "life" | "work";

export interface Category {
  id: CategoryId;
  /** 表示名（枕崎弁まじりの語感を優先） */
  label: string;
  /** 補足の一行。バブルだけでは意味が推測になるので必ず添える */
  note: string;
  color: string;
  /** 浮きの相対的な大きさ。データ量と需要で変える */
  weight: number;
  /** 準備中かどうか。プロトタイプ段階では eat のみ true */
  ready: boolean;
}

export const CATEGORIES: Category[] = [
  {
    id: "eat",
    label: "食べる",
    note: "かつお、ラーメン、食堂",
    color: "#E8512B",
    weight: 1.12,
    ready: true,
  },
  {
    id: "drink",
    label: "飲む",
    note: "居酒屋、スナック、バー",
    color: "#C42A6E",
    weight: 1.0,
    ready: true,
  },
  {
    id: "go",
    label: "出かける",
    note: "海、温泉、イベント",
    color: "#35A8C9",
    weight: 1.06,
    ready: false,
  },
  {
    id: "beauty",
    label: "美容",
    note: "髪、ネイル、整体",
    color: "#6FCBB0",
    weight: 0.94,
    ready: false,
  },
  {
    id: "life",
    label: "暮らし",
    note: "病院、買い物、市役所",
    color: "#2F62AA",
    weight: 1.06,
    ready: false,
  },
  {
    id: "work",
    label: "はたらく",
    note: "枕崎・南さつま・南九州の求人",
    color: "#EFA92B",
    weight: 0.94,
    ready: false,
  },
];

export const byId = (id: string) => CATEGORIES.find((c) => c.id === id);
