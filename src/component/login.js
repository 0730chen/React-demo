//这是一个登陆/注册的页面，用来登陆github

import ReactDOM from "react-dom";
import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import "../style/login.scss";
import axios from "axios";

import { Form, Icon, Input, Button, Checkbox } from "antd";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //values就是一个对象
        axios.post("api/login", values).then(res => {
          console.log(res);
          if (res.data === "ok") {
            window.location = "/zhihu";
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
		<div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-GitHub"></use>
        </svg>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
            <a href="/zhihu"></a>
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
	  </div>
    );
  }
}
const LoginForm = Form.create({ name: "normal_login" })(NormalLoginForm);

export default LoginForm;
