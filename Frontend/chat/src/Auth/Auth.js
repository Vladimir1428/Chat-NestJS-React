import './Auth.css'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SingUp } from './Sing-up/SingUp';
import { Login } from './Login/Login';
import {  Routes, Route } from "react-router-dom"
export const Auth = () =>{
    const navigate = useNavigate()
    const onSingUp = () => {
        navigate('/singup')
    }
    const onLogin = () => {
        navigate('/login')
    }
    return(
        <div className='Home'>
            <span className='title'>CHAT</span>
            <div className='button_wrapper'>
                <Button type="primary" onClick={onSingUp}>SingUp</Button>
                <Button type="primary" onClick={onLogin}>Login</Button>
            </div>
        </div>
    )
}