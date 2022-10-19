import "./Singup.css"
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Button } from 'antd';

export const SingUp = () => {
    const [form] = Form.useForm()
    const onSingup = (values) => {
      console.log(values)
      form.resetFields()
      };
    return(
        <div className="SingUp">
            <span className="title">SING-UP</span>
            <Form
                name="normal_singup"
                className="singup-form"
                initialValues={{ remember: true }}
                onFinish={onSingup}
                form={form}
            >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Please input your Email!' }]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    type="email"
                    placeholder="Email"
                  />
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
                    <Button type="primary" htmlType="submit" className="singup-form-button">
                        Sing up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}