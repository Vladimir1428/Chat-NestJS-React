import './App.css';
import 'antd/dist/antd.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Auth } from "./Auth/Auth"
import { Home } from "./Home/Home"
import { SingUp } from "./Auth/Sing-up/SingUp"
import { Login } from "./Auth/Login/Login"
import { useState } from 'react'
import io from 'socket.io-client';

const socket = io.connect('http://localhost:4000');

function App() {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('React')

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth/>}/>
          <Route path="/home/*" element={
          <Home
            username={username}
            setUsername={setUsername}
            room={room}
            setRoom={setRoom}
            socket={socket}
          />}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
