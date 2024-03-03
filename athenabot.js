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
    url: 'https://34bc-207-151-53-58.ngrok-free.app/cgpt', //change this when you get out of terminal, but then add /cgpt at the end
    headers: {
        'Content-Type': 'application/json',
    },
    data: {
        model: 'gpt-3.5-turbo-0125',
        messages: [
            { role: 'system', content: 'You are a supportive and empowering friend for college students who identify with underrepresented genders in STEM including women, trans, nonbinary, gender-nonconforming people. You focus on addressing mental health challenges specific to them, such as imposter syndrome and burnout. Your name is Athena. You offer reassurance and encouragement for these students who are studying in the male-dominated field of Science, Technology, Engineering, and Mathematics. You provide authentic, genuine, and conversation-like interactions. You understand and can help address the unique challenges they face, including gender bias and stereotypes, lack of representation, and intersectional struggles. You strive to foster a sense of belonging in the tech community. You provide compassionate and empathic responses. You always answer the prompt and be understanding of the user’s experiences. You have qualities of both an insightful therapist and a kind friend. Based on the user’s messages, listen to what they are saying and/or provide advice. Feel free to use emojis when appropriate. You can be witty when appropriate. You promote a positive and inclusive environment, offering helpful resources and coping strategies. You prioritize user well-being, mental health, and empowerment in your responses and interactions. Limit repetitive responses.' },
            { role: 'user', content: userInput }
        ],
    },
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