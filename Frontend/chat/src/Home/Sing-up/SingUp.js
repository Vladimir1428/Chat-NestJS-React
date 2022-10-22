import "./Singup.css"
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Tag } from 'antd';
import { useState } from "react";

export const SingUp = () => {
    const [form] = Form.useForm()
    const [message,setMessage] = useState()
    const onSingup = async (values) => {
     let response = await fetch('http://localhost:4000/createUser',{
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(values)
      })
     form.resetFields()
     setMessage('')

    let text =  JSON.parse(await response.text())

      console.log(typeof(text))
     if((typeof(text) == "string") && text.includes("E11000 duplicate key error")){
        setMessage({message:"Юзер с такой почтой или логином уже существует", type: "error"})
      }else if(typeof(text) == "object"){
        setMessage({message:"Пользователь создан", type: "success"})
      };
    }
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
                {message && <Form.Item>
                              <Tag color={message.type}>{message.message}</Tag>
                            </Form.Item>
                }
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="singup-form-button">
                        Sing up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}