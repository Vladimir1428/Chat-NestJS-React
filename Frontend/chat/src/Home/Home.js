import './Home.css'
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
export const Home = () =>{
    const navigate = useNavigate()
    const onSingUp = () => {
        navigate('/singup')
    }
    const onLogin = () => {
        navigate('/login')
    }
    return(
        <div className='Home'>
            <span>CHAT</span>
            <div className='button_wrapper'>
                <Button type="primary" onClick={onSingUp}>SingUp</Button>
                <Button type="primary" onClick={onLogin}>Login</Button>
            </div>
        </div>
    )
}