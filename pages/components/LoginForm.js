import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "antd/dist/antd.css";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Form
        name="basic"
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              borderRadius: 10,
            }}
            placeholder="username"
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
              borderRadius: 10,
            }}
            placeholder="password"
          />
        </Form.Item>

        <Form.Item>
          <div>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#76323F",
                width: 130,
                height: 30,
                borderRadius: 10,
                borderColor: "#76323f",
                marginRight: 10,
                color: "#eee",
              }}
            >
              LOGIN
            </Button>
            <Button
              htmlType="Regiter"
              style={{
                backgroundColor: "#F9EAE1",
                width: 130,
                height: 30,
                borderRadius: 10,
                marginLeft: 10,
              }}
            >
              SIGN UP
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
