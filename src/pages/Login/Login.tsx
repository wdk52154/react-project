import React from 'react';
import { Form, Input } from 'antd';
import './login.less';

//登录页
const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login_content">
        <Form className="login_content-form">
          <Form.Item>
            用户名:
            <Input placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item>
            密码: <Input placeholder="请输入密码" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
