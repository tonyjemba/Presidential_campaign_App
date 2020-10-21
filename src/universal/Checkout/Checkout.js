import React from "react";
import { Form, Input,Button,Checkbox,Select,Tooltip,Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const { Option } = Select;
const { Title } = Typography;
const { TextArea } = Input;
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
const onFinish = (values) => {
    console.log('Received values of Registration form: ', values);
  };
const Checkout = () => {
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
    return(
        <div >
                  <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Checkout
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              STORE/
            </span>
            CHECKOUT
          </div>
        </div>
      </div>
            <div className="w-100 flex justify-center mt5 mb5">
                <div className="w-80">
                    <div className="w-100 flex justify-start">
                          <Form
      {...formItemLayout}
      form={form}
                            name="register"
                            className="w-100"
      onFinish={onFinish}
      initialValues={{
        prefix: '+256',
      }}
      scrollToFirstError
                        >
                            
      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please enter your Name!',
            whitespace: true,
          },
        ]}
      >
        <Input size="large" />
                            </Form.Item>
                                                  
      <Form.Item
        name="District / Region"
        label="District / Region"
        rules={[
          {
            required: true,
            message: 'Please enter your District / Region!',
          },
        ]}
      >
        <Input size="large" />
                            </Form.Item>
                            <Form.Item
        name="Pick Up"
        label={
          <span>
            Pickup Location&nbsp;
            <Tooltip title="More charges may incur for places beyond Kampala">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        
        rules={[
          {
            required: true,
            message: 'Please enter your Pick Up location',
          },
        ]}
      >
        <Input size="large" />
                            </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not a valid E-mail!',
          },
          {
            message: 'Please enter your E-mail!',
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
            message: 'Please enter your phone number!',
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
        name="message"
        label={
          <span>
            Additional Information&nbsp;
            <Tooltip title="Notes about your Order">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        
      >
        <TextArea rows={6} placeholder="e.g. special notes for delivery" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should agree to the terms and conditions'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I Agree to the <Link to="/privacyPoliy_Terms">Terms and Conditions</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Place Order
        </Button>
      </Form.Item>
            </Form>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Checkout;