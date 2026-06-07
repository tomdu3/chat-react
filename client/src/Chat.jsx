import React from 'react'

function Chat({ socket, username, room }) {
  return <div className="chat-container">
    <div style={styles.chatHeader} >
      <h2>Live Chat</h2>
    </div>
    <div style={styles.chatBody} className="chat-body">
    </div>
    <div className="chat-footer">
      <input type="text" placeholder="Type message..." />
      <button>&#9658;</button>
    </div>
  </div>
}

const styles = {
  "chat-container": {
    border: '1px solid pink',
  }
}

export default Chat;