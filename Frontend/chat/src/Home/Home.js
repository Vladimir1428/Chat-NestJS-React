import './Home.css'
import { Button, Input, Select} from 'antd';
const { Option } = Select;

export const Home = ({ username, setUsername, room, setRoom, socket }) => {

    return(
        <div className="Home">
            <div className='login-form'>
                <span className='title'>Chat Room</span>
                <Select
                    defaultValue="React"
                    onChange= {(room)=> {setRoom(room)}}
                >
                    <Option value="Angular">Angular</Option>
                    <Option value="Vue">Vue</Option>
                    <Option value="React">React</Option>
                </Select>
                <Button 
                    type="primary"
                >
                    Join
                </Button>
            </div>
        </div>
    )
}
