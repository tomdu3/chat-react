import { useState } from 'react'
import io from 'socket.io-client';
import './App.css'

const socket = io.connect('http://localhost:3000');


function App() {
  return <div className="App">
    <h1>Hello World</h1>

  </div>;
}

export default App
