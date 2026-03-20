# ふくみー・ポータルサイト (Fukumi Portal Site)

「頑張っている人が、すり減らない未来をつくる。」

『ふくみー・ポータルサイト』は、法人のDX伴走支援やAI活用支援を行うプロフェッショナルのための、ポートフォリオ兼ミニアプリのポータルサイトです。

## 🌟 デザインコンセプト：ふくみー・ビジュアルアイデンティティ
温かみのある「手書きノート」の世界観を、最新のウェブ技術で再現しています。

- **ノート用紙の再現**: CSSグラデーションを用いて、罫線とマージン線を持つ紙の質感を表現。
- **インクの色**: 基本テキストは「青ボールペン色 (`#0000CD`)」、強調箇所は「赤修正インク色 (`#FF0000`)」。
- **手書き風フォント**: Google Fonts『Klee One』を採用し、親しみやすさを演出。
- **アナログな装飾**: コーヒーの染み、手書きの星・矢印、そして案内役の「棒人間」をSVGアセットとして配置。
- **ラフなUI**: 定規を使わずに引いたような下線や、付箋（Sticky Notes）を模したアプリカードデザイン。

## 🚀 主要な機能
- **実績紹介**: これまでのDX支援やAI制作の実績をノートの箇条書き風に表示。
- **魔法の道具箱**: 開発したアプリ（LINEボットやツール）へのリンクを付箋風カードで一覧化。
- **Gemini 案内人**: 画面右下に常駐するAIチャットボット（Gemini 2.5 Flash搭載）。サイトの案内や相談に乗ってくれます。

## 🛠 技術構成
- **Frontend**: HTML5 / Vanilla CSS / JavaScript
- **Backend (API)**: Vercel Serverless Functions
- **AI**: Google Gemini API (`@google/generative-ai`)
- **Deployment**: Vercel

## ⚙️ セットアップとデプロイ
1. **リポジトリのクローン**:
   ```bash
   git clone https://github.com/fukumy/fukusapo-hp.git
   ```
2. **依存関係のインストール**:
   ```bash
   npm install
   ```
3. **Vercel での公開**:
   Vercelにリポジトリをインポートし、以下の環境変数を設定してください。
   - `GEMINI_API_KEY`: [Google AI Studio](https://aistudio.google.com/) から取得したAPIキー

---
*Created by Antigravity AI*
