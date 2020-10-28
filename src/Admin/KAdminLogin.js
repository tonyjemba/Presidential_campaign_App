import React from "react";
import { Layout, Typography, Input, Button, Form, Checkbox} from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const onFinishReg = (values) => {
  console.log("Received values of Registration form: ", values);
};
const onFinishAuth = (values) => {
  console.log("Received values of Login form: ", values);
};

const RegistrationForm = () => {
  const [form] = Form.useForm()
  return (
    <div>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinishReg}
        initialValues={{
          prefix: "+256",
        }}
        scrollToFirstError>
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not a valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}>
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback>
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject("The two passwords that you entered do not match!");
              },
            }),
          ]}>
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
const LoginForm = () => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinishAuth}>
      <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}>
          <Input size="large"  placeholder="E-mail" prefix={<MailOutlined className="site-form-item-icon" />}/>
        </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          size="large"
        />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
const KAdminLogin = () => {
  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Admin Panel
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            Login to Write to DataBase
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-90">
          <Layout style={{ backgroundColor: "#FFFFFF" }}>
            <Content style={{ backgroundColor: "#FFFFFF" }}>
              <div className="mb6 mt5 w-75">
                <Router>
                  <Switch>
                    <Route exact path="/login">
                      <LoginForm />
                    </Route>
                    <Route path="/Ksignup">
                      <RegistrationForm />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default KAdminLogin;
