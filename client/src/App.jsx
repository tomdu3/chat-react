import { useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Chat from './Chat';

const socket = io.connect('http://localhost:3000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const [showChat, setShowChat] = useState(false);
  
  const joinRoom = () => {
    if (username && room) {
      socket.emit('join_room', { username, room });
      setShowChat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h1>Join a Chat</h1>
          <form action="" method="get">
            <div className="user-wrap">
            <label htmlFor='username'>Username</label>
          <input 
            type="text" 
            placeholder="Username..."
            id='username'
            onChange={(e) => setUsername(e.target.value)} 
          />
          </div>
          <div className="room-wrap">
          <label htmlFor='room'>Room</label>
          <input 
            type="text" 
            placeholder="Room ID..."
            id='room' 
            onChange={(e) => setRoom(e.target.value)} 
          />
          </div>
          <button onClick={joinRoom}>Join Room</button>
          </form>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
