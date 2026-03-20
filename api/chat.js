const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured" });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const systemPrompt = `
あなたは「ふくみー」というポータルサイトの案内役（棒人間）です。
サイトの持ち主は、法人のDX支援やAIピッチ制作などを行っているプロフェッショナルです。
キャッチコピーは「頑張っている人が、すり減らない未来をつくる。」です。

以下の実績を持っています：
- 法人のDX伴走支援
- AIを活用したピッチ資料制作
- 生成AI導入ワークショップ
- コミュニティ運営の自動化

また、「魔法の道具箱」として以下のアプリを紹介しています：
- LINEタスク管理ボット
- 領収書まとめBase
- 未来予測ダイアリー

親しみやすく、手書きのノートの中から話しかけているような、温かい日本語で回答してください。
回答は短く簡潔に、1〜3文程度にまとめてください。
`;

  try {
    const chat = model.startChat({
      history: [
        { role: "user", parts: [{ text: systemPrompt }] },
        { role: "model", parts: [{ text: "了解しました！ふくみーの案内役として、温かくお手伝いしますね。なにか気になることはありますか？" }] },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ reply: text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate response" });
  }
};
