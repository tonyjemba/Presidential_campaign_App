import React, {useState }from "react";
import { Form, Input, Button, Checkbox, Tooltip, Typography,message } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addVolunteer } from "../../Redux/Admin/Actions";

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

const mapDispatchToProps = (dispatch) => {
  return {
    addVolunteer: (story) => dispatch(addVolunteer(story)),
  };
};
const Getinvolved = ({ addVolunteer }) => {
    const [email, setEmail] = useState({ email: "" });
    const [Name, setName] = useState({ Name: "" });
    const [phone, setPhone] = useState({ phone: "" });
  const [village, setVillage] = useState({ village: "" });
  const [district, setDistrict] = useState({ district: "" });
  const [help, setHelp] = useState({ help: "" });

    const send = () => {
      addVolunteer({ ...email, ...Name, ...phone, ...village, ...district, ...help });
      form.resetFields();
      message.success("Thank you for supporting Kyagulanyi!", 3);
      setEmail({ email: "" });
      setName({ Name: "" });
      setPhone({ phone: "" });
      setVillage({ village: "" });
      setDistrict({ district: "" });
      setHelp({ help: "" });
    };
  const [form] = Form.useForm();
 
 
  return (
    <div>
      <div
        className="w-100 flex justify-center"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}
          >
            Get Involved
          </Title>
          <div
            className="pointer"
            style={{ color: "#0C0474", cursor: "default" }}
          >
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            GETINVOLVED
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
              onFinish={send}
              initialValues={{
                prefix: "+256",
              }}
              scrollToFirstError
            >
              <Form.Item
                name="Name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input
                  size="large"
                  onChange={(e) => setName({ Name: e.target.value })}
                />
              </Form.Item>

              <Form.Item
                name="District/Region"
                label="District / Region"
                rules={[
                  {
                    required: true,
                    message: "Please enter your District / Region!",
                  },
                ]}
              >
                <Input
                  size="large"
                  onChange={(e) => setDistrict({ district: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="Village"
                label="Village"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Village Name",
                  },
                ]}
              >
                <Input
                  size="large"
                  onChange={(e) => setVillage({ village: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid E-mail!",
                  },
                  {
                    message: "Please enter your E-mail!",
                  },
                ]}
              >
                <Input
                  size="large"
                  onChange={(e) => setEmail({ email: e.target.value })}
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                  size="large"
                  onChange={(e) => setPhone({ phone: e.target.value })}
                />
              </Form.Item>
              <Form.Item
                name="help"
                label={
                  <span>
                    Additional Information&nbsp;
                    <Tooltip title="Anything you know that can help Kyagulanyi win">
                      <QuestionCircleOutlined />
                    </Tooltip>
                  </span>
                }
              >
                <TextArea
                  rows={6}
                  placeholder="e.g. How you can help in the Campaign"
                  onChange={(e) => setHelp({ help: e.target.value })}
                />
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(
                            "Should agree to the terms and conditions"
                          ),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I Agree to the{" "}
                  <Link to="/privacyPoliy_Terms">Terms and Conditions</Link>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(Getinvolved);
