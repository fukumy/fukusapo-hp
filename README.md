# ふくみー・ポータルサイト

「頑張っている人が、すり減らない未来をつくる。」を掲げる、ポートフォリオ兼ミニアプリのポータルサイトです。

## デザインコンセプト
「ふくみー・ビジュアルアイデンティティ」に基づき、手書きノート風の温かみのあるデザインを採用しています。

- 背景: 罫線ノート/方眼紙パターンのCSS
- 配色: 青ボールペン色 (#0000CD) と 赤修正インク色 (#FF0000)
- フォント: Klee One (Google Fonts)
- 装飾: コーヒーの染み、手書きの星・矢印などのSVGアセット

## 技術スタック
- HTML / CSS (Vanilla)
- JavaScript
- Gemini API (Google Generative AI SDK)
- Vercel Serverless Functions

## デプロイ設定
Vercel でデプロイする際、以下の環境変数を設定してください：
- `GEMINI_API_KEY`: Google AI Studio から取得した API キー
