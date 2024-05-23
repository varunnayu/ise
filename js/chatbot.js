document.addEventListener("DOMContentLoaded", function() {
  const openChatBtn = document.getElementById('open-chat-btn');
  const closeChatBtn = document.getElementById('close-btn');
  const chatPopup = document.getElementById('chat-popup');
  const sendBtn = document.getElementById('send-btn');
  const userInput = document.getElementById('user-input');
  const chatMessages = document.getElementById('chat-messages');

  openChatBtn.addEventListener('click', function() {
    chatPopup.style.display = 'block';
  });

  closeChatBtn.addEventListener('click', function() {
    chatPopup.style.display = 'none';
  });

  sendBtn.addEventListener('click', function() {
    sendMessage();
  });

  userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText !== '') {
      const userMessage = createUserMessage(messageText);
      chatMessages.appendChild(userMessage);
      userInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
      showBotTyping();
      // Simulate bot reply after 1.5 seconds
      setTimeout(function() {
        const botMessage = createBotMessage(getBotResponse(messageText));
        chatMessages.appendChild(botMessage);
        hideBotTyping();
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 1500);
    }
  }

  function createUserMessage(text) {
    const message = document.createElement('div');
    message.classList.add('message', 'user-message');
    message.innerHTML = `
      <img src="images/user.png" alt="User">
      <p>${text}</p>
    `;
    return message;
  }

  function createBotMessage(text) {
    const message = document.createElement('div');
    message.classList.add('message', 'bot-message');
    message.innerHTML = `
      <img src="images/bot.png" alt="Bot">
      <p>${text}</p>
    `;
    return message;
  }

  function showBotTyping() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot-message');
    typingIndicator.innerHTML = `
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
  }

  function hideBotTyping() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  function getBotResponse(userInput) {
      // Convert user input to lowercase
      userInput = userInput.toLowerCase();
      
      // Simple response mapping based on user input
      if (userInput.includes('hello') || userInput.includes('hi')) {
          return "Hello there! How can I help you?";
      } else if (userInput.includes('who is hod of ise dept')){
        return "Dr.Annapurna";
      } else if (userInput.includes('contact number')){
        return "+91 9901566506";
      } else if (userInput.includes('email adress of clg')){
        return "ssit@gmail.com";
      } else if (userInput.includes('wibsite of clg')){
        return "ssit.edu.in";
      } else if (userInput.includes('more information')){
        return "contact to college in offical website";
      }
      else if (userInput.includes('how are you')) {
          return "I'm just a bot, but thanks for asking!";
      } else if (userInput.includes('what can you do')) {
          return "I can provide information, answer questions, and assist with tasks.";
      } else if (userInput.includes('thank you')) {
          return "You're welcome!";
      } else if (userInput.includes('goodbye') || userInput.includes('bye')) {
          return "Goodbye! Have a great day!";
      } else {
          return "I'm sorry, I didn't understand that.";
      }
  }
});
