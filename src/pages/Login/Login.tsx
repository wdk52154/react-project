import React from 'react';
import { Form, Input } from 'antd';
import './login.less';

//登录页
const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login-content">
        <Form>
          <Form.Item>
            <Input placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item>
            <Input placeholder="请输入密码"></Input>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
