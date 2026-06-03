import React from 'react'

function Chat({ socket, username, room }) {
  return <div className="chat-container">
    <div className="chat-header">
      <h2>Live Chat</h2>
    </div>
    <div className="chat-body">
    </div>
    <div className="chat-footer">
      <input type="text" placeholder="Type message..." />
      <button>&#9658;</button>
    </div>
  </div>
}   

export default Chat;