import React, { useState } from 'react';
import './chat.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faXmark } from '@fortawesome/free-solid-svg-icons'
import m2 from '../images/m2.svg'
import img from '../images/img.png'
import G1 from '../images/G1.svg'

function Chat() {
  const [messages, setMessages] = useState([
    { text: 'Hello!', user: 'Alice', timestamp: '09:00 AM' },
    { text: 'Hi there!', user: 'Bob', timestamp: '09:05 AM' },
    { text: 'How are you?', user: 'Alice', timestamp: '09:10 AM' },
    
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      user: 'You', // Replace with the sender's name or 'Receiver' for the other participant
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="chat">
        <div className='lit'>
        <h3>Ironmen</h3><span>
        <FontAwesomeIcon icon={faXmark} className="icon"/>
        </span>
        </div>
        <div className='g'>
        <h4>Today</h4>
        </div>
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.user === 'You' ? 'sent' : 'received'}`}
          >
            <div className="message-content">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <img src={G1} className="sit" alt="logo" />
        <button onClick={handleSendMessage}><img src={m2} className="hut" alt="logos"></img></button>
      </div>
    </div>
  );
}

export default Chat;
