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
- **Project (``)**: 各セクションごとの固まり
- **Inner構造**: 各セクション内に `__inner` を配置し、最大幅（900px）を管理。
  - 背景色・グラデーションは `` クラス（全幅）に指定。
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
- **`.l-content`**: 右側メインコンテンツ (`margin-left: 300px`)
  - セクションごとに背景を敷き、内部の `l-inner` で幅を制限。
- **`.l-inner`**: 最大900を調整・
- **`.wrapper`**: `l-inner` の更に中身を調整。
  - sp時、縦並び。

### 3. セクション構成 (`Project`)

| クラス名       | 内容 (Innerの中身)          | スタイル・背景                  |
| :------------- | :-------------------------- | :------------------------------ |
| `.hero` | ビデオ全幅 | `video` タグに `muted autoplay loop playsinline` を指定 |
| `.project` | 2列画像グリッド | `display: grid` を活用 |
| `.feature` | 3カラム紹介 | 円形デザインは `border-radius: 50%` |
| `.flow` | ステップ図解 | `counter-reset` で数字を自動生成 |
|`.contact` |	3つの窓口（ボタン） |	Flexbox で3等分し、hover 時の挙動を制御。 |
| `.to-top` | 上に戻るボタン | JSで `.is-show` クラスを制御して表示/非表示 |
---

## 🛠️ 開発メモ（自分用）

- 背景ビデオは `muted autoplay loop playsinline` をセット。
- 画像パスに html側は、`../` は不要。`img/` から書き始める。
- scss側は`../img`をする。提出時、画像が出ない。

## 📂 フォルダ構造

```
root/
 ├─ index.html
 ├─ img/
 ├─ video/
 ├─ js/
 │   └─ main.js （★ここを編集）
 ├─ scss/
 │   └─ style.scss （★ここを編集）
 └─ css/
     ├─ style.css （自動生成）
     └─ style.css.map （デバッグ用）
```
