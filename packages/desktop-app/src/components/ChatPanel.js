import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './ChatPanel.css';

function ChatPanel() {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! How can I help you build your app today?' }
  ]);

  const handleSendMessage = async (text) => {
    const newUserMessage = { sender: 'user', text };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const aiResponse = await response.json();
      setMessages(prevMessages => [...prevMessages, aiResponse]);

    } catch (error) {
      console.error('Error sending message to backend:', error);
      const errorResponse = {
        sender: 'ai',
        text: 'Sorry, I had trouble connecting to the backend.'
      };
      setMessages(prevMessages => [...prevMessages, errorResponse]);
    }
  };

  return (
    <div className="panel chat-panel">
      <h2>AI Chat</h2>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
}

export default ChatPanel;
