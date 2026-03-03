# 模写プロジェクト：明るいハウス

## 🚀 Git / GitHub コマンド備忘録

### 1. 初期設定（プロジェクト開始時）
1. GitHubでリポジトリを作成（URLをコピー）
2. `git init`
3. `git remote add origin [コピーしたURL]`
4. `git add .`
5. `git commit -m "first commit"`
6. `git branch -M main`
7. `git push -u origin main`

### 2. 日々の作業フロー
1. `git status` （現在の変更を確認）
2. `git pull` （最新を同期）
3. `git add .`
4. `git commit -m "修正内容"`
5. `git push`

---

## 🏗️ コーディングルール：Sass(SCSS) + BEM

### 1. 開発フロー
- **編集ファイル**: `scss/style.scss`
- **出力ファイル**: `css/style.css`（直接編集禁止）
- **コンパイル**: VSCodeの **「Watch Sass」** を必ずONにする。

### 2. クラス設計（BEM + FLOCSS風）
- **Layout (`l-`)**: サイトの大きな骨組み（サイドバー等）
- **Project (`p-`)**: 各セクションごとの固まり
- **Inner構造**: 各セクション内に `__inner` を配置し、最大幅（900px）を管理。
  - 背景色・グラデーションは `p-` クラス（全幅）に指定。
  - 実際のコンテンツは `__inner` 内に配置して中央寄せにする。
- **Sassネスト**: `&__inner` のように `&`（アンパサンド）を活用。

### 3. レスポンシブ管理
- 個別の `sp.css` は使用せず、`style.scss` 内で **`@include sp { ... }`** を使用して一括管理。

---

## 📐 レイアウト設計案

### 1. デザイン共通ルール
- **Font**: `Noto Sans JP` (Google Fonts)
- **ブレイクポイント**: `960px`（これ以下をSPとして判定）
- **コンテンツ共通幅**: `900px` (Innerで管理)

### 2. 全体レイアウト (`Layout`)
PC時は左右に分割し、サイドバーを固定する。
- **`.l-container`**: サイト全体の親要素 (`display: flex`)
- **`.l-sidebar`**: 左側固定メニュー (`width: 300px` / `position: fixed`)
  - ロゴ、ナビゲーション、SNSリンクを配置。
  - SP時：高さ `60px` 程度で上部固定。メニューはハンバーガー形式。
- **`.l-main`**: 右側メインコンテンツ (`margin-left: 300px`)
  - セクションごとに背景を敷き、内部の `inner` で幅を制限。

### 3. セクション構成 (`Project`)
| クラス名 | 内容 (Innerの中身) | スタイル・背景 |
| :--- | :--- | :--- |
| **`.p-hero`** | ビデオ全幅 + キャッチコピー | **全画面ビデオ固定** |
| **`.p-project`** | 2列2行の画像グリッド | **グラデーション背景** |
| **`.p-feature`** | 画像・テキスト交互配置 | **グラデーション背景** |
| **`.p-flow`** | ステップ図解（1.2.3...） | 背景：白 |
| **`.p-contact`** | お問い合わせフォーム | 背景：白 |
| **`.p-footer`** | コピーライト表示 | 背景：黒 / `l-main` 内に配置 |

---

## 🛠️ 開発メモ（自分用）
- 背景ビデオは `muted autoplay loop playsinline` をセット。
- リセットCSS (`destyle.css`) のURLミス（ß）に注意。
- `l-sidebar` のスペルミス（sidaber）を徹底修正。
- 画像パスに `../` は不要。`img/` から書き始める。

## 📂 フォルダ構造
```
root/
 ├─ index.html
 ├─ img/
 ├─ video/
 ├─ scss/
 │   └─ style.scss （★ここを編集）
 └─ css/
     ├─ style.css （自動生成）
     └─ style.css.map （デバッグ用）
```