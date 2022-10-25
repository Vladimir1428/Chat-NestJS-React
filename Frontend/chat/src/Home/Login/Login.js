import "./Login.css"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';
import { useDispatch } from "react-redux";
import { setToken } from "../../slice/tokenSlice";

export const Login = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()
    const onLogin = async (values) => {
      let response = await fetch('http://localhost:4000/login',{
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(values)
      })
      dispatch(setToken(await response.json()))
      form.resetFields()
      };
    return(
        <div className="Login">
            <span className="title">LOGIN</span>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onLogin}
                form={form}
            >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}