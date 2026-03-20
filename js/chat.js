document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatBox = document.getElementById('chat-box');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    chatToggle.addEventListener('click', () => {
        chatBox.classList.toggle('chat-box-hidden');
        chatToggle.textContent = chatBox.classList.contains('chat-box-hidden') ? '▲' : '▼';
    });

    async function sendMessage() {
        const text = userInput.value.trim();
        if (!text) return;

        // Add user message to UI
        appendMessage('user', text);
        userInput.value = '';

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            const data = await response.json();
            if (data.reply) {
                appendMessage('bot', data.reply);
            } else {
                appendMessage('bot', 'ごめんね、うまくお返事できなかったみたい。');
            }
        } catch (error) {
            console.error(error);
            appendMessage('bot', '通信エラーが発生しちゃった。');
        }
    }

    function appendMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${role}`;
        msgDiv.style.marginBottom = '10px';
        msgDiv.style.textAlign = role === 'user' ? 'right' : 'left';
        msgDiv.style.color = role === 'user' ? '#0000CD' : '#FF0000';
        msgDiv.innerHTML = `<span style="display:inline-block; padding:5px 10px; border:1px solid; border-radius:5px;">${text}</span>`;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});
