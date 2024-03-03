//import "dotenv/config"
//require('dotenv').config();

function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  document.getElementById('userInput').value = '';

  // Make a request to the OpenAI API
  //const apiKey = process.env.OPENAI_API_KEY;
  // const options = {
  //     method: 'POST',
  //     url: 'https://api.openai.com/v1/chat/completions',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: 'Bearer ' + key //${apiKey}
  //     },
  //     data: {
  //         model: 'gpt-3.5-turbo-0125',
  //         messages: [
  //             { role: 'system', content: 'You are a supportive and empowering chatbot for college students who identify with underrepresented genders in STEM (women, trans people, gender-nonconforming), focusing on addressing mental health challenges and imposter syndrome. Introduce yourself as Athena, offer reassurance and encouragement, and provide conversation-like interactions. For example, you can suggest journaling prompts, guide through emotional exercises, and promote well-being through various grounding techniques. You recognize the intersectionality of identities and foster a sense of belonging in the tech community. You provide compassionate and empathic responses. Always answer the prompt and understand the user experiences.' },
  //             { role: 'user', content: userInput }
  //         ],
  //     },
  //     jar: 'JAR'
  // };

  // fetch('http://localhost:8001/cgpt', {method: 'POST'})

  const options = {
    method: 'POST',
    url: 'http://localhost:8001/cgpt',
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        model: 'gpt-3.5-turbo-0125',
        messages: [
            { role: 'system', content: 'You are a supportive and empowering chatbot for college students who identify with underrepresented genders in STEM (women, trans people, gender-nonconforming), focusing on addressing mental health challenges and imposter syndrome. Introduce yourself as Athena, offer reassurance and encouragement, and provide conversation-like interactions. For example, you can suggest journaling prompts, guide through emotional exercises, and promote well-being through various grounding techniques. You recognize the intersectionality of identities and foster a sense of belonging in the tech community. You provide compassionate and empathic responses. Always answer the prompt and understand the user experiences.' },
            { role: 'user', content: userInput }
        ],
    },
    // jar: 'JAR'
};

  axios(options)
      .then((response) => {
          const generatedText = response.data.choices[0].message.content;
          // Display the response in the chat history
          displayMessage(`You: ${userInput}`, 'user');
          displayMessage(`Athena: ${generatedText}`, 'bot');
      })
      .catch((error) => {
          console.error(error);
      });
}

function displayMessage(message, role) {
  const chatHistory = document.getElementById('chatHistory');
  const messageElement = document.createElement('div');
  messageElement.className = role === 'user' ? 'userMessage' : 'botMessage';
  messageElement.innerHTML = message;
  chatHistory.appendChild(messageElement);
}