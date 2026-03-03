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
- **親子関係**: `__`（アンダースコア2つ）で繋ぐ
- **状態（Modifier）**: `--`（ハイフン2つ）で繋ぐ
- **Sassネスト**: `&__inner` のように `&`（アンパサンド）を活用

### 3. レスポンシブ管理
- 個別の `sp.css` は使用せず、`style.scss` 内で **`@include sp { ... }`** を使用して一括管理。

---

## 📐 レイアウト設計案

### 1. デザイン共通ルール
- **Font**: `Noto Sans JP` (Google Fonts)
- **ブレイクポイント**: `960px`（これ以下をSPとして判定）
- **共通パディング**: `20px`

### 2. 全体レイアウト (`Layout`)
PC時は `flex` で左右に分割し、サイドバーを固定。
- **`.l-container`**: サイト全体の親要素 (`display: flex`)
- **`.l-sidebar`**: 左側固定メニュー (`width: 300px` / `position: fixed`)
    - SP時：ハンバーガーメニューとして上部固定
- **`.l-main`**: 右側メインコンテンツ (`margin-left: 300px`)
    - コンテンツ最大幅：`900px` (中央寄せ)
- **`.l-sidebar`** : 左側固定メニュー
    - ロゴ、ナビゲーション、SNSリンクを配置
    - SP時：高さ `60px` 程度で上部固定。メニューは三本線（ハンバーガー）で開閉。

### 3. セクション構成 (`Project`)
| クラス名 | 内容 | スタイル・背景 |
| :--- | :--- | :--- |
| **`.p-hero`** | メインビジュアル | 全画面ビデオ固定 |
| **`.p-project`** | 制作実績 | 2列2行のグリッド / **グラデーション** |
| **`.p-feature`** | 特徴 | 画像・テキスト交互配置 / **グラデーション** |
| **`.p-flow`** | 完成までの流れ | 背景：白 |
| **`.p-contact`** | お問い合わせ | 背景：白 |
| **`.p-footer`** | フッター | 背景：黒 / コピーライト表示 |

---

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