import { useState } from 'react'
import io from 'socket.io-client';
import './App.css'

const socket = io.connect('http://localhost:3000');


function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  
  const joinRoom = () => {
    if (username && room) {
      socket.emit('join_room', { username, room });
    }
  }
  return <div className="App">
    <h1>Hello World</h1>
    <hr />
    <h3>Join a Chat</h3>
    <input type="text" placeholder="Username..." onChange={(e) => setUsername(e.target.value)} />
    <input type="text" placeholder="Room ID..." onChange={(e) => setRoom(e.target.value)} />
    <button onClick={joinRoom}>Join Room</button>
  </div>;
}

export default App
