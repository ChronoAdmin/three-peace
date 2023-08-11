// OpenAIのAPIを使用するためのライブラリをインポートします
import { Configuration, OpenAIApi } from "openai";

// OpenAI APIを利用するための設定を行います
const configuration = new Configuration({
  // 環境変数からAPIキーを取得します
  apiKey: process.env.OPENAI_API_KEY,
});

// OpenAI APIのインスタンスを作成します
const openai = new OpenAIApi(configuration);

// レクエストハンドラーをエクスポートします
export default async function handler(req, res) {
  // レクエストのメソッドがPOSTかどうかを確認します
  if (req.method !== 'POST') {
    // POSTでない場合は、405ステータスコード(メソッドが許可されていない)とともにエラーメッセージを送信します
    res.status(405).send({ message: 'Method Not Allowed' });
    return;
  }

  // リクエストのContent-Typeがapplication/jsonかどうかを確認します
  if (req.headers['content-type'] !== 'application/json') {
    // Content-Typeがapplication/jsonでない場合は、415ステータスコード(サポートしていないメディアタイプ)とともにエラーメッセージを送信します
    res.status(415).send({ message: 'Invalid content type. Server expects application/json' });
    return;
  }

  // リクエストボディが存在するかどうかを確認します
  if (!req.body) {
    // リクエストボディが存在しない場合は、400ステータスコード(クライアントエラー)とともにエラーメッセージを送信します
    res.status(400).send({ message: 'No request body' });
    return;
  }

  // リクエストボディからuserTextを抽出します
  const { userText } = req.body;

  // 200ステータスコード(成功)とともにuserTextをメッセージとしてレスポンスします
  
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role:"user", content: userText}]
  })
  const aiMessage = completion.data.choices[0].message.content
  console.log(aiMessage)
  res.status(200).json({ message: aiMessage });
}
