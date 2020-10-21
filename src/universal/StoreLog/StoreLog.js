import React from "react";
import { Layout, Typography, Input, Button,Select, Form, Checkbox, Tooltip } from "antd";
import { UserOutlined, LockOutlined,QuestionCircleOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";



const { Title } = Typography;
const { Content } = Layout;
const {Option} =Select


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
    console.log('Received values of Registration form: ', values);
  };
  const onFinishAuth = (values) => {
    console.log("Received values of Login form: ", values);
  };

const RegistrationForm = () => {
    const [form] = Form.useForm();
      const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
      >
        <Option value="256">+256</Option>
                  <Option value="254">+254</Option>
                  <Option value="255">+255</Option>
                  <Option value="257">+257</Option>
                  <Option value="250">+250</Option>
      </Select>
    </Form.Item>
  );
    return (
        <div>
            <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinishReg}
      initialValues={{
        prefix: '+256',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not a valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  size="large"/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password  size="large"/>
      </Form.Item>

      <Form.Item
        name="UserName"
        label={
          <span>
            UserName&nbsp;
            <Tooltip title="This is what you will use to Login">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your UseraName!',
            whitespace: true,
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="residence"
        label="Habitual Residence"
        rules={[
          {
            required: true,
            message: 'Please select your habitual residence!',
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
                        }}
                        size="large"
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <Link to="/privacyPoliy_Terms">agreement</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
            </Form>
            <div className="mt2 tc w-100 flex justify-end">
                <div>I Already Have An Account <span style={{cursor:"pointer"}}><Link to="/storeAuthentication">Login</Link></span></div>
            </div>
          </div>
      )
  }
const LoginForm = () =>{
    return(
         <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinishAuth}>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: "Please input your Username!" }]}>
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                      size="large"
                    />
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
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Link clLinkssName="login-form-forgot" to="/storeRegistration">
                      Forgot password
                    </Link>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button">
                      Log in
                    </Button>
                    Or <Link to="/storeRegistration">register now!</Link>
                  </Form.Item>
                </Form>
    )
}
const StoreLog = () => {

  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Login To Acess Store
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            STORE
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
                                      <Route exact path="/storeAuthentication">
                                          <LoginForm/>
                                      </Route>
                                      <Route path="/storeRegistration">
                                          <RegistrationForm/>
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
export default StoreLog;
