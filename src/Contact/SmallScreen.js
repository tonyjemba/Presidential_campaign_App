import React from "react";
import { Layout, Typography, Form, Input, Button } from "antd";
import { IconContext } from "react-icons";
import {GrTwitter} from "react-icons/gr"
import VolunteerForm from "../universal/VolunteerForm/VolunteerForm";

const { Content} = Layout;
const { Title } = Typography;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const SmallScreen = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f9f9f9" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={4}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            CONTACT
          </Title>
          <div style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            CONTACT{" "}
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-90">
          <Layout style={{ backgroundColor: "#FFFFFF" }}>
            <Content style={{ backgroundColor: "#FFFFFF" }}>
              <div className="w-100">
                <div className="mt5">
                  <Title level={5} style={{ cursor: "default" }}>
                    Contact Information
                  </Title>
                </div>
                <div className="w-100 bg-red mt3" style={{ height: "70vh" }}>
                  map
                </div>
                <div
                  className="w-100 flex flex-row justify-between mt4 fw7"
                  style={{ fontSize: "14px", cursor: "default" }}>
                  <div className="w-40 flex flex-column">
                    <div>Political Party: National Unity Platform</div>

                    <div className="mt2">P.O Box 32434 Kira Kampala</div>
                  </div>
                  <div className="w-40 flex flex-column ">
                    <div>Phone: +256 789 367543</div>

                    <div className="mt2">Email: info@nupuganda.co.ug</div>
                  </div>
                </div>
                <div className="mt5">
                  <Title level={5} style={{ cursor: "default" }}>
                    We Want To Hear From You
                  </Title>
                </div>
                <div className="mt3" style={{ fontSize: "16px", cursor: "default" }}>
                  <div>
                    Fields marked with <span style={{ color: "#ff0000" }}>*</span> are
                    required.
                  </div>
                </div>
                <div className="mt4 w-100 mb5 flex justify-start">
                  <div className="w-100">
                    <Form
                      {...layout}
                      size="large"
                      name="nest-messages"
                      onFinish={onFinish}
                      validateMessages={validateMessages}>
                      <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[
                          {
                            required: true,
                          },
                        ]}>
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                          {
                            type: "email",
                            required: true,
                          },
                        ]}>
                        <Input />
                      </Form.Item>
                      <Form.Item name={["user"]} label="Zip Code">
                        <Input />
                      </Form.Item>
                      <Form.Item name={["user", "location"]} label="Location">
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={["user", "Message"]}
                        label="Message"
                        rules={[
                          {
                            required: true,
                          },
                        ]}>
                        <Input.TextArea />
                      </Form.Item>
                      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                              </div>
                              <div className="w-100 mb4 mt5">
                <div className="w-100  pl3 pr3 pt4 pb4" style={{backgroundColor:"#0C0474"}}>
                  <Title style={{ color: "white",cursor:"default" }} level={4}>Volunteer Today</Title>
                  <div style={{ color: "white", fontsize: "16px",cursor:"default" }}>Sign Up to volunteer, Help us reach the message to the rest of the world. <br />Kyagulanyi For President 2021. </div>
                  <div className=" w-100 mt3">
                    <VolunteerForm/>
                  </div>
                </div>
                <div className="w-100  pl3 pr3 pt4 pb4 mt4  pointer" style={{ backgroundColor: "#ff0000" }}>
                  <Title style={{ color: "white",cursor:"default" }} level={4}>Muda ku Muda Campaign</Title>
                  <div className="fw7 white mt2" style={{fontStyle:"16px"}}>Donate to Support Us</div>
                </div>
                                <div className="w-100  pl3 pr3 pt4 pb4 mt4 pointer" style={{ backgroundColor: "#00acee50",border:"10px",borderColor:"blue" }}>
                  <Title style={{ color: "white", cursor: "default", display:"flex",flexDirection:"row"}} level={4}>
                    <div className="mr2">
                                        <IconContext.Provider
                    value={{
                      color: "#00acee",
                      size: "17px",
                    }}>
                    <div className="pointer  ">
                      <GrTwitter />
                    </div>
                  </IconContext.Provider>
                    </div>
                    <div>Latest Tweets</div></Title>
                  <div className="fw7 white mt2" style={{fontStyle:"16px"}}>http</div>
                </div>
              </div>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default SmallScreen;
