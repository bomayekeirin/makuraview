import type { CategoryId } from "./categories";

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export const WEEKDAY_JA: Record<Weekday, string> = {
  mon: "月", tue: "火", wed: "水", thu: "木",
  fri: "金", sat: "土", sun: "日",
};

export interface Shop {
  slug: string;
  name: string;
  kana: string;
  categories: CategoryId[];
  primary: CategoryId;
  sub: string;
  subLabel: string;
  address: string;
  /** 同じ建物に複数店が入る場合（折口町92など） */
  building?: string;
  tel?: string;
  hours?: string;
  closed: Weekday[];
  /** 定休日以外にも休むことがある店。「今日開いてる」を鵜呑みにさせない */
  irregular?: boolean;
  lead?: string;
  signature?: { item: string; price?: string };
  /** 夜の店のチャージ・セット料金。最も知りたいのに、どこにも載っていない情報 */
  charge?: string;
  /** 予約手段。DM不可の店にDMを推さないために持つ */
  reservation?: string;
  payment?: string;
  delivery?: string;
  dietary?: string;
  instagram?: string;
  x?: string;
  operator?: string;
  status: "draft" | "published" | "closed";
}

/* --------------------------------------------------------------------------
   ※全件 status:"draft" ＝ 店舗許諾前。
   ※他サイトの説明文・点数は転載しない。lead は自前の要約。
   -------------------------------------------------------------------------- */
export const SHOPS: Shop[] = [
  /* ===== 食べる ─ かつお・郷土・食堂 =============================== */
  {
    slug: "daitoku", name: "だいとく", kana: "だいとく",
    categories: ["eat"], primary: "eat", sub: "katsuo", subLabel: "かつお料理",
    address: "折口町17", tel: "0993-72-0357",
    hours: "11:00-14:30 / 18:00-20:30", closed: ["thu"],
    lead: "かつおラーメンを目当てに県外から人が来る。枕崎の食を一軒で説明できる店。",
    signature: { item: "かつおラーメン", price: "￥800前後" },
    status: "draft",
  },
  {
    slug: "manbou", name: "魚処まんぼう", kana: "うおどころまんぼう",
    categories: ["eat", "drink"], primary: "eat", sub: "katsuo", subLabel: "かつお料理",
    address: "恵比須町198-3", tel: "0993-72-0114",
    hours: "18:00-21:30", closed: ["mon", "tue"],
    lead: "夜だけ開く郷土料理店。かつおも鹿籠豚も、地のものが一通り揃う。",
    signature: { item: "鹿籠豚しゃぶ" },
    status: "draft",
  },
  {
    slug: "ippuku", name: "味処 一福", kana: "あじどころいっぷく",
    categories: ["eat"], primary: "eat", sub: "kaisen", subLabel: "海鮮・食堂",
    address: "東本町8", tel: "0993-72-1025",
    hours: "11:00-14:00 / 17:00-21:00", closed: [],
    lead: "枕崎牛と鹿籠豚が同じ卓に並ぶ。海の町だが肉も強い、という一軒。",
    status: "draft",
  },
  {
    slug: "naniwa", name: "魚処 なにわ 栄", kana: "うおどころなにわさかえ",
    categories: ["eat"], primary: "eat", sub: "kaisen", subLabel: "海鮮・食堂",
    address: "千代田町7-1", tel: "0993-72-0481",
    hours: "12:00-14:00 / 18:00-20:00", closed: [],
    lead: "枕崎駅から歩いてすぐ。電車で来て、降りてすぐ食べられる数少ない店。",
    signature: { item: "ぶえんかつお丼", price: "￥1,600" },
    status: "draft",
  },
  {
    slug: "minato-shokudo", name: "枕崎みなと食堂", kana: "まくらざきみなとしょくどう",
    categories: ["eat", "go"], primary: "eat", sub: "kaisen", subLabel: "海鮮・食堂",
    address: "松之尾町33-1", building: "枕崎お魚センター 潮風テラス",
    tel: "0993-73-2311", hours: "11:00-14:00（土日 -14:30）", closed: [],
    lead: "券売機で買って席で待つ。かつお節とだしがおかわり自由。港を見ながら食べられる。",
    signature: { item: "枕崎鰹船人めし" },
    status: "draft",
  },
  {
    slug: "one", name: "ONE", kana: "わん",
    categories: ["eat", "go"], primary: "eat", sub: "kaisen", subLabel: "海鮮丼",
    address: "岩戸町33", tel: "0993-76-1139",
    hours: "11:30-14:30 / 18:00-21:00", closed: ["wed", "thu", "fri"],
    lead: "海が見える席で海鮮丼。営業日が少ないので、行く前に必ず確認を。",
    status: "draft",
  },
  {
    slug: "kikuya", name: "喜久家食堂", kana: "きくやしょくどう",
    categories: ["eat"], primary: "eat", sub: "shokudo", subLabel: "食堂",
    address: "折口町8", tel: "0993-72-0377",
    hours: "11:00-14:00", closed: ["wed", "thu"],
    lead: "創業60年。かつおの町でカツ丼とチキン南蛮が名物という、ねじれが面白い。",
    signature: { item: "チキン南蛮" },
    status: "draft",
  },
  {
    slug: "yu", name: "お食事処 ゆう", kana: "おしょくじどころゆう",
    categories: ["eat"], primary: "eat", sub: "shokudo", subLabel: "食堂",
    address: "岩崎町460", tel: "0993-72-7722",
    hours: "11:00-14:00 / 17:00-21:00", closed: ["wed"],
    lead: "昼も夜も通しで使える食堂。チキン南蛮が定番。",
    status: "draft",
  },

  /* ===== 食べる ─ 麺 =============================================== */
  {
    slug: "ajihiro", name: "あじひろ", kana: "あじひろ",
    categories: ["eat"], primary: "eat", sub: "ramen", subLabel: "ラーメン",
    address: "松之尾町16", tel: "0993-72-3432", hours: "不定", closed: [],
    lead: "三代で通う人がいる店。鹿児島とんこつと、期間限定のかつおラーメン。",
    signature: { item: "ラーメン", price: "￥750" },
    status: "draft",
  },
  {
    slug: "menyuki", name: "麺遊記", kana: "めんゆうき",
    categories: ["eat"], primary: "eat", sub: "ramen", subLabel: "ラーメン",
    address: "立神本町445", tel: "0993-72-4756",
    hours: "11:00-14:00 / 18:00-21:00", closed: ["tue"],
    lead: "担々麺と台湾味噌。枕崎で「かつお以外」を食べたくなった日に。",
    status: "draft",
  },
  {
    slug: "takara-ramen", name: "タカララーメン", kana: "たかららーめん",
    categories: ["eat"], primary: "eat", sub: "ramen", subLabel: "ラーメン",
    address: "汐見町209", tel: "0993-72-4520",
    hours: "11:00-14:00 / 17:30-20:00", closed: ["wed"],
    lead: "ラーメン屋だが、地元の人は焼きそばを頼む。",
    signature: { item: "焼きそば" },
    status: "draft",
  },
  {
    slug: "haohao-hanten", name: "好好飯店", kana: "はおはおはんてん",
    categories: ["eat"], primary: "eat", sub: "chuka", subLabel: "中華",
    address: "汐見町201", tel: "080-4693-4947",
    hours: "11:00-14:00 / 17:00-22:00", closed: ["mon"],
    lead: "平日の昼は待つこともある中華。ランチはソフトドリンクが付く。",
    signature: { item: "酸辣湯麺（大）", price: "￥1,150" },
    status: "draft",
  },

  /* ===== 食べる ─ 寿司・日本料理 ==================================== */
  {
    slug: "gojo", name: "すし匠 五条", kana: "すししょうごじょう",
    categories: ["eat"], primary: "eat", sub: "sushi", subLabel: "寿司",
    address: "岩戸町509", tel: "0993-72-2230",
    hours: "11:30-14:00 / 17:00-21:30", closed: ["mon"],
    lead: "枕崎で寿司といえばここ、と名前が挙がる一軒。",
    status: "draft",
  },
  {
    slug: "mizuho-sushi", name: "瑞穂寿し", kana: "みずほずし",
    categories: ["eat"], primary: "eat", sub: "sushi", subLabel: "寿司",
    address: "新町1", tel: "0993-78-4688", closed: ["sun"],
    lead: "10食限定の3段弁当がある。",
    reservation: "電話のみ（DMでの予約は受けていません）",
    instagram: "mizuhosushi2014",
    status: "draft",
  },
  {
    slug: "suginoya", name: "すし 杉乃家", kana: "すしすぎのや",
    categories: ["eat"], primary: "eat", sub: "sushi", subLabel: "寿司",
    address: "港町128-5", tel: "0993-72-6207",
    hours: "17:00-22:00（LO 21:00）", closed: ["thu"],
    lead: "夜だけ開く寿司屋。港町の一角。",
    instagram: "suginoya.0320",
    status: "draft",
  },
  {
    slug: "oota", name: "和懐 おお田", kana: "わかいおおた",
    categories: ["eat"], primary: "eat", sub: "washoku", subLabel: "日本料理",
    address: "西本町59", tel: "0993-78-4345",
    hours: "11:00-14:00（土日祝のみ）/ 17:30-22:00", closed: ["tue"],
    lead: "人をもてなす日のための店。南薩3市への配達もしている。",
    delivery: "枕崎市・南さつま市・南九州市（指宿市は要相談）",
    instagram: "wakaiota",
    status: "draft",
  },

  /* ===== 食べる ─ 肉・串・弁当 ===================================== */
  {
    slug: "goemon", name: "焼肉 伍右衛門", kana: "やきにくごえもん",
    categories: ["eat"], primary: "eat", sub: "yakiniku", subLabel: "焼肉",
    address: "立神本町456", tel: "0993-72-7431", closed: ["tue"],
    irregular: true,
    lead: "黒毛和牛A4〜A5。前日までに予約がないと、月か水も休むことがある。",
    reservation: "電話（要予約）",
    instagram: "yakinikugoemon",
    status: "draft",
  },
  {
    slug: "koume", name: "串揚げ処 小梅", kana: "くしあげどころこうめ",
    categories: ["eat", "drink"], primary: "eat", sub: "kushiage", subLabel: "串揚げ",
    address: "立神本町147", tel: "070-4353-8659",
    hours: "18:30-（フード LO 21:00）", closed: ["wed"],
    lead: "2026年7月末に開いたばかりの串揚げ屋。枕崎では珍しい業態。",
    reservation: "Instagram DM または 電話",
    instagram: "coume.324",
    status: "draft",
  },
  {
    slug: "tatsujin-bentou", name: "タツジン弁当", kana: "たつじんべんとう",
    categories: ["eat"], primary: "eat", sub: "bento", subLabel: "弁当・惣菜",
    address: "折口町127", tel: "090-8838-1453",
    hours: "11:30-13:30 / 16:00-17:30", closed: [],
    lead: "日替わり弁当は毎日Instagramのストーリーで。焼き鳥もオードブルもある。",
    reservation: "web・LINE・電話（夕方の弁当とオードブルは前日まで）",
    delivery: "オードブル（要予約）",
    instagram: "tatsujin.bentou",
    status: "draft",
  },

  /* ===== 食べる ─ カフェ =========================================== */
  {
    slug: "tsukimichi", name: "ツキミチ喫茶", kana: "つきみちきっさ",
    categories: ["eat"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "汐見町195", hours: "10:30-17:00", closed: ["wed", "sun"],
    irregular: true,
    lead: "厨房に小麦を持ち込まない、完全グルテンフリーの喫茶。米粉やおから粉で焼いた菓子とエスプレッソ。",
    dietary: "グルテンフリー（厨房に小麦を持ち込まない）",
    reservation: "ホールケーキは DM または直接来店",
    instagram: "tsukimichi31",
    status: "draft",
  },
  {
    slug: "laftel", name: "LAFTEL（ラフテル）", kana: "らふてる",
    categories: ["eat"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "汐見町160", hours: "10:00-12:00 / 13:30-17:30", closed: ["mon"],
    irregular: true,
    lead: "クレープ専門店。昼と午後で一度閉まる。臨時休業が多いので、行く前にInstagramを。",
    payment: "現金・PayPay・メルペイ・d払い・payどん（クレジットカード不可）",
    instagram: "artcafe.laftel",
    status: "draft",
  },
  {
    slug: "yamaneko", name: "山猫瓶詰研究所", kana: "やまねこびんづめけんきゅうじょ",
    categories: ["eat", "go"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "金山町722", tel: "0993-78-3643",
    hours: "12:00-16:30", closed: ["mon", "tue"],
    lead: "旧郵便局を改装したカフェ。奥に時間貸しの「秘密の部屋」がある。",
    signature: { item: "秘密の部屋", price: "￥1,000 / 1時間" },
    status: "draft",
  },
  {
    slug: "kotokoto-cafe", name: "kotokoto cafe", kana: "ことことかふぇ",
    categories: ["eat"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "住吉町57-1", hours: "11:00-16:00",
    closed: ["mon", "tue", "wed", "thu"],
    lead: "金・土・日だけ開く。おにぎりランチは15食限定。",
    status: "draft",
  },
  {
    slug: "pukupuku", name: "ぷくぷくCAFE", kana: "ぷくぷくかふぇ",
    categories: ["eat", "go"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "松之尾町33-1", building: "枕崎お魚センター 潮風テラス",
    hours: "9:00-17:00", closed: [],
    lead: "お魚センターの中。港を見ながら一息つける。",
    status: "draft",
  },
  {
    slug: "old-man", name: "カフェ ザ オールドマン", kana: "かふぇざおーるどまん",
    categories: ["eat"], primary: "eat", sub: "cafe", subLabel: "カフェ",
    address: "港町1", closed: [],
    lead: "港町の喫茶店。",
    status: "draft",
  },

  /* ===== 食べる ─ パン・菓子 ======================================= */
  {
    slug: "verdi", name: "ヴェルディ", kana: "う゛ぇるでぃ",
    categories: ["eat"], primary: "eat", sub: "bakery", subLabel: "パン",
    address: "東本町35", tel: "0993-73-2428",
    hours: "7:40-18:00", closed: [],
    lead: "朝7時40分から開く。たこ焼きパンという謎の名物がある。",
    signature: { item: "たこ焼きパン" },
    status: "draft",
  },
  {
    slug: "koppe-tokyodo", name: "コッペ東京堂", kana: "こっぺとうきょうどう",
    categories: ["eat"], primary: "eat", sub: "bakery", subLabel: "パン",
    address: "中町222", tel: "0993-72-8901",
    hours: "7:30-18:30", closed: ["mon", "wed", "fri", "sun"],
    lead: "開いている日が週三日。「ちびっこパン」を買えたら運がいい。",
    signature: { item: "ちびっこパン" },
    status: "draft",
  },
  {
    slug: "cardia-bakery", name: "カルディアベーカリー", kana: "かるでぃあべーかりー",
    categories: ["eat"], primary: "eat", sub: "bakery", subLabel: "パン",
    address: "桜山本町579", tel: "080-2132-5205",
    hours: "9:30-15:30", closed: ["tue", "wed"],
    lead: "2025年秋にできたパン屋。旧Iショップの建物を使っている。",
    status: "draft",
  },
  {
    slug: "le-petit-bois", name: "le petit bois", kana: "るぷてぃぼあ",
    categories: ["eat"], primary: "eat", sub: "sweets", subLabel: "洋菓子",
    address: "塩屋北町586", tel: "0993-78-3810",
    hours: "10:00-18:00", closed: ["mon"],
    lead: "手土産に困ったらここ。ダブルフロマージュが看板。",
    signature: { item: "ダブルフロマージュ" },
    status: "draft",
  },
  {
    slug: "atsuishien-minato", name: "厚石園 港店", kana: "あついしえんみなとてん",
    categories: ["eat", "go"], primary: "eat", sub: "sweets", subLabel: "茶・甘味",
    address: "松之尾町34-2", building: "枕崎お魚センター かつお横丁",
    closed: [],
    lead: "自家茶葉の煎茶アフォガート。茶どころ枕崎らしい一品。",
    signature: { item: "煎茶アフォガート" },
    status: "draft",
  },

  /* ===== 飲む ─ バー =============================================== */
  {
    slug: "bar45", name: "BAR45", kana: "ばーよんごー",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "折口町92", building: "折口町92",
    hours: "21:00-", closed: ["mon"],
    lead: "ダーツ2台とカラオケ。飲み放題は時間無制限。",
    charge: "飲み放題 無制限 ／ 男女 ￥2,500・ソフトドリンク ￥2,000",
    reservation: "Instagram DM",
    instagram: "bar45_makurazaki",
    status: "draft",
  },
  {
    slug: "bar-billy", name: "BAR Billy", kana: "ばーびりー",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "折口町95-1", building: "折口町95-1",
    hours: "20:00-翌2:00", closed: [], irregular: true,
    lead: "2026年3月にできた店。ベティ・ブープとピンクの内装。キープ制あり。",
    charge: "フリータイム ／ 男女 ￥3,000・飲まない女性 ￥2,000",
    instagram: "bar_billy108",
    status: "draft",
  },
  {
    slug: "heat", name: "HEAT", kana: "ひーと",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "ダーツバー",
    address: "折口町95-1", building: "折口町95-1",
    tel: "0993-72-5083", hours: "21:00-", closed: [],
    lead: "ダーツバー。予約と問い合わせは電話で。",
    reservation: "電話",
    x: "HEAT_dartsbar",
    status: "draft",
  },
  {
    slug: "bar-nine", name: "AMUSEMENT BAR nine", kana: "あみゅーずめんとばーないん",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "アミューズメントバー",
    address: "千代田町1", hours: "21:00 または 22:00 - 翌3:00",
    closed: [], irregular: true,
    lead: "ダーツ、ビリヤード、カラオケ、スロット。枕崎駅の近く。",
    reservation: "Instagram DM",
    instagram: "nine_amusementbar",
    status: "draft",
  },
  {
    slug: "bubbry", name: "bubbry", kana: "ばぶりー",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "東本町151", tel: "090-2434-5471",
    hours: "20:00-", closed: [],
    lead: "貸切の予約もできる。「ド田舎だけど盛りあげるー！」が店の言葉。",
    reservation: "電話 または Instagram DM",
    instagram: "bubbry0721",
    status: "draft",
  },
  {
    slug: "bamboo", name: "バンブー", kana: "ばんぶー",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "汐見町217", hours: "19:00-翌4:00（土 18:00-）", closed: [],
    lead: "カウンターとボックス席。会計が明朗だという評判の店。",
    status: "draft",
  },
  {
    slug: "bar-sakura", name: "Bar桜", kana: "ばーさくら",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "港町128", building: "港町128", tel: "0993-76-3006",
    closed: [],
    lead: "港町128番地。同じ建物にラウンジ蓮も入っている。",
    status: "draft",
  },
  {
    slug: "bar-cloud9", name: "BAR CLOUD9", kana: "ばーくらうどないん",
    categories: ["drink"], primary: "drink", sub: "bar", subLabel: "バー",
    address: "新町1", tel: "0993-72-7975", closed: [],
    lead: "チャージなしで飲める。",
    charge: "チャージなし",
    status: "draft",
  },
  {
    slug: "abc-canon", name: "ABC. American Bar Canon", kana: "えーびーしーあめりかんばーきゃのん",
    categories: ["drink", "eat"], primary: "drink", sub: "bar", subLabel: "ダイニングバー",
    address: "東本町22", tel: "0993-72-9151",
    hours: "18:00-翌1:00", closed: [],
    lead: "ステーキやハンバーガーも出るバー。枕崎駅の隣。",
    status: "draft",
  },
  {
    slug: "dining-bar-engine", name: "Dining Bar ENGINE", kana: "だいにんぐばーえんじん",
    categories: ["drink", "eat"], primary: "drink", sub: "bar", subLabel: "ダイニングバー",
    address: "寿町454", tel: "0993-76-7333",
    hours: "18:00-23:00", closed: ["wed", "sun"],
    lead: "ログハウス調でジャズが流れる。かつお味噌のピザがある。",
    status: "draft",
  },

  /* ===== 飲む ─ スナック・ラウンジ ================================== */
  {
    slug: "snack-ryo", name: "スナック良", kana: "すなっくりょう",
    categories: ["drink"], primary: "drink", sub: "snack", subLabel: "スナック",
    address: "汐見町212-1", tel: "0993-73-2438",
    hours: "20:00-24:30", closed: ["sun"],
    lead: "カウンターと座敷で20席ほど。送迎もしてくれる。",
    status: "draft",
  },
  {
    slug: "lounge-ren", name: "ラウンジ蓮", kana: "らうんじれん",
    categories: ["drink"], primary: "drink", sub: "snack", subLabel: "ラウンジ",
    address: "港町128", building: "港町128", tel: "0993-72-5560",
    hours: "18:00-24:00", closed: ["mon", "sun"],
    lead: "Bar桜と同じ建物。",
    status: "draft",
  },
  {
    slug: "mokaji", name: "モカジイ", kana: "もかじい",
    categories: ["drink"], primary: "drink", sub: "snack", subLabel: "スナック",
    address: "中央町3", tel: "0993-72-7837", closed: [],
    status: "draft",
  },
  {
    slug: "maryquant", name: "Maryquant", kana: "まりーくぁんと",
    categories: ["drink"], primary: "drink", sub: "snack", subLabel: "パブ",
    address: "港町1", tel: "0993-72-5700", closed: [],
    status: "draft",
  },

  /* ===== 飲む ─ カラオケ =========================================== */
  {
    slug: "oto-karaoke-pub", name: "oto カラオケpub", kana: "おとからおけぱぶ",
    categories: ["drink"], primary: "drink", sub: "karaoke_snack", subLabel: "カラオケスナック",
    address: "折口町92", building: "折口町92", tel: "090-5024-4661",
    hours: "21:00-翌2:00", closed: [], irregular: true,
    lead: "カラオケ歌い放題。営業時間前の来店も相談できる。",
    charge: "飲み放題 2時間 ／ 男女 ￥2,500・延長 1人 ￥1,000",
    reservation: "電話 または Instagram DM",
    instagram: "oto_karaoke_pub",
    status: "draft",
  },
  {
    slug: "coco-music-house", name: "ミュージックハウスCoCo", kana: "みゅーじっくはうすここ",
    categories: ["drink"], primary: "drink", sub: "karaoke_snack", subLabel: "カラオケスナック",
    address: "高見町250", building: "CoCoハウス1F", closed: [],
    lead: "昭和のスナック時代から続くカラオケ店。森伊蔵・村尾・魔王も置いている。",
    instagram: "coco250takami",
    status: "draft",
  },
  {
    slug: "night-and-day", name: "Night & Day", kana: "ないとあんどでい",
    categories: ["drink"], primary: "drink", sub: "karaoke_bar", subLabel: "カラオケバー",
    address: "高見町250", building: "CoCoハウス1F", tel: "090-8668-7797",
    hours: "19:00-23:30", closed: ["sun"],
    lead: "女性ひとりでも入りやすいと書いてある店。",
    status: "draft",
  },
  {
    slug: "love", name: "Love", kana: "らぶ",
    categories: ["drink"], primary: "drink", sub: "karaoke_snack", subLabel: "カラオケスナック",
    address: "西本町83", tel: "080-6048-4492", closed: [],
    charge: "飲み放題＋歌い放題 2時間 ￥2,000",
    status: "draft",
  },
  {
    slug: "karaoke-plaza-utao", name: "カラオケプラザ唄王", kana: "からおけぷらざうたおう",
    categories: ["drink", "go"], primary: "drink", sub: "karaoke_box", subLabel: "カラオケボックス",
    address: "中央町398-2", tel: "0993-72-1888",
    hours: "13:00-翌1:00（金土 -翌2:00）", closed: ["wed"],
    lead: "持ち込み自由。部屋代だけで歌える。",
    status: "draft",
  },
  {
    slug: "karaoke-poppo", name: "カラオケ ポッポ", kana: "からおけぽっぽ",
    categories: ["drink", "go"], primary: "drink", sub: "karaoke_box", subLabel: "カラオケボックス",
    address: "板敷西町253", tel: "0993-72-5679",
    hours: "14:00-翌2:00", closed: [],
    lead: "持ち込み自由。音響がいいと評判。",
    status: "draft",
  },

  /* ===== 飲む ─ 居酒屋 ============================================= */
  {
    slug: "kamikagura", name: "酒食堂 神神楽", kana: "さけしょくどうかみかぐら",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "立神本町169", closed: [],
    lead: "2024年秋にできた店。地酒が揃っていて、全席禁煙、座敷もある。",
    status: "draft",
  },
  {
    slug: "ebisuya", name: "みんなのゑびす家", kana: "みんなのえびすや",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "宮田町355", tel: "0993-72-1737",
    hours: "18:00-23:45", closed: ["wed"],
    lead: "鮮魚の仲買人がやっている店。",
    status: "draft",
  },
  {
    slug: "chickenman", name: "大衆酒場チキンマン", kana: "たいしゅうさかばちきんまん",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "折口町19", tel: "0993-87-5445",
    hours: "17:00-24:00", closed: ["sun"],
    lead: "福岡風の焼き鳥。折口町で早い時間から開いている。",
    status: "draft",
  },
  {
    slug: "fukurou", name: "呑喰厨房ふくろう", kana: "のみくいちゅうぼうふくろう",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "中町23", tel: "0993-72-2812",
    hours: "18:00-22:00", closed: ["thu"],
    lead: "元漁師の店主。かつおの腹皮の刺身が出る。",
    status: "draft",
  },
  {
    slug: "tsuchifumazu", name: "居酒屋食堂つちふまず", kana: "いざかやしょくどうつちふまず",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "栄中町18", tel: "0993-72-1858",
    hours: "11:30-14:00 / 18:00-24:00", closed: [],
    lead: "昼はかき氷、夜は居酒屋。",
    status: "draft",
  },
  {
    slug: "madai", name: "焼酎庵 真鯛", kana: "しょうちゅうあんまだい",
    categories: ["drink", "eat"], primary: "drink", sub: "izakaya", subLabel: "居酒屋",
    address: "緑町43-2", tel: "080-2715-9139",
    hours: "11:30-13:30 / 18:00-23:00", closed: ["tue"],
    status: "draft",
  },

  /* ===== 飲む ─ アミューズメント ==================================== */
  {
    slug: "round2", name: "ラウンド2", kana: "らうんどつー",
    categories: ["drink", "go"], primary: "drink", sub: "amusement", subLabel: "貸切スペース",
    address: "高見町273", building: "三愛ビル1F", tel: "080-9242-3627",
    hours: "12:00-翌5:00（昼は予約のみ）", closed: [],
    lead: "ゴルフ、カラオケ、ダーツができる貸切空間。昼から使える。",
    reservation: "電話",
    operator: "ラウンド2・ハナレ",
    instagram: "hanare_round2",
    status: "draft",
  },
  {
    slug: "hanare", name: "ハナレ", kana: "はなれ",
    categories: ["drink"], primary: "drink", sub: "amusement", subLabel: "貸切スペース",
    address: "高見町273", building: "三愛ビル1F", tel: "080-9242-3627",
    hours: "22:00-翌5:00", closed: [],
    lead: "ラウンド2の隣。深夜に強い。",
    reservation: "電話",
    operator: "ラウンド2・ハナレ",
    instagram: "hanare_round2",
    status: "draft",
  },
];

/* --- 参照ヘルパ ---------------------------------------------------------- */

export const shopsIn = (cat: CategoryId) =>
  SHOPS.filter((s) => s.categories.includes(cat) && s.status !== "closed");

export function subGroups(cat: CategoryId) {
  const map = new Map<string, { key: string; label: string; count: number }>();
  for (const s of shopsIn(cat)) {
    const cur = map.get(s.sub);
    if (cur) cur.count += 1;
    else map.set(s.sub, { key: s.sub, label: s.subLabel, count: 1 });
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

const KEYS: Weekday[] = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function isOpenToday(shop: Shop, date = new Date()): boolean {
  return !shop.closed.includes(KEYS[date.getDay()]);
}

export const todayKey = (date = new Date()) => KEYS[date.getDay()];

/** 同じ建物に入っている他の店 */
export const neighborsOf = (shop: Shop) =>
  shop.building
    ? SHOPS.filter((s) => s.building === shop.building && s.slug !== shop.slug)
    : [];
