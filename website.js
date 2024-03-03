const express = require('express');
const { OpenAIAPI } = require('openai');
const app = express();
const port = 3000;
const openai = new OpenAIAPI('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');
app.use(express.json());
app.post('/chatgpt', async (req, res) => {
  const { messages } = req.body;
  // Format messages for ChatGPT
  const formattedMessages = messages.map(message => ({
    role: message.role,
    content: message.content,
  }));
  // Generate a response from ChatGPT
  const response = await openai.complete({
    prompt: formattedMessages,
    model: 'gpt-3.5-turbo',
  });
  res.json({ response: response.choices[0].text.trim() });
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});