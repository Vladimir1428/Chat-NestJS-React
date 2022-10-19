import './App.css';
import 'antd/dist/antd.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './Home/Home';
import { SingUp } from './Home/Sing-up/SingUp';
import { Login } from './Home/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
