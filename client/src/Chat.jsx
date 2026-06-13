import React, { useEffect, useState, useRef } from 'react';

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (currentMessage.trim() !== '') {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: `${hours}:${minutes}`,
      };

      await socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    const receiveMessageHandler = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on('receive_message', receiveMessageHandler);

    return () => {
      socket.off('receive_message', receiveMessageHandler);
    };
  }, [socket]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Live Chat</h2>
        <span className="room-badge">Room: {room}</span>
      </div>
      <div className="chat-body">
        {messageList.length === 0 ? (
          <div className="empty-chat">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 10.742h.008v.008h-.008v-.008zm.37 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.146 0h.008v.008h-.008v-.008zm.37 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.146 0h.008v.008h-.008v-.008zm.37 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 18.75c-3.007 0-5.5-1.922-5.5-4.5 0-.965.353-1.884.97-2.61a.75.75 0 00.187-.63c-.15-.992-.472-2.18-.946-3.23.275.05.57.085.875.097a.75.75 0 00.672-.416C9.176 5.86 10.485 5.25 12 5.25c3.007 0 5.5 1.922 5.5 4.5s-2.493 4.5-5.5 4.5z" />
            </svg>
            <p>No messages yet.<br />Send a message to start the conversation!</p>
          </div>
        ) : (
          messageList.map((messageContent, idx) => {
            const isMe = username === messageContent.author;
            return (
              <div
                key={idx}
                className={`message ${isMe ? 'you' : 'other'}`}
              >
                <div className="message-content">
                  {messageContent.message}
                </div>
                <div className="message-meta">
                  <span className="time">{messageContent.time}</span>
                  <span className="author">{isMe ? 'You' : messageContent.author}</span>
                </div>
              </div>
            );
          })
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Type your message..."
          onChange={(e) => {
            setCurrentMessage(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;