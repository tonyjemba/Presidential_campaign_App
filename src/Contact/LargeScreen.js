import React,{useState} from "react";
import { Layout, Typography, Form, Input, Button,message } from "antd";
import { TwitterTimelineEmbed} from 'react-twitter-embed';
import { IconContext } from "react-icons";
import {GrTwitter} from "react-icons/gr"
import { connect } from "react-redux";
import { addMessage } from "../Redux/Admin/Actions";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const { Content, Sider } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (story) => dispatch(addMessage(story)),
  };
};
const LargeScreen = ({ addMessage }) => {
  const [email, setEmail] = useState({ email: "" });
  const [name, setName] = useState({ name: "" });
  const [phone, setPhone] = useState({ phone: "" });
  const [story, setstory] = useState({ msg: "" });
  const [location, setLocation] = useState({ location: "" });
  const [form] = Form.useForm();
 useFirestoreConnect([{ collection: "images" }]);
 const images = useSelector((state) => state.firestore.ordered.images);
 const mapimage = images && images[4].imageUrl;
  const send = () => {
    addMessage({ ...email, ...name, ...phone, ...story, ...location });
    form.resetFields();
    message.success("Your message has been sent!", 3);
    setEmail({ email: "" });
    setName({ name: "" });
    setLocation({ location: "" });
    setPhone({ phone: "" });
    setstory({ msg: "" });
  };

  return (
    <div>
    
      <div
        className="w-100 flex justify-center"
        style={{ backgroundColor: "#f9f9f9" }}
      >
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={4}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}
          >
            CONTACT
          </Title>
          <div style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              <Link to="/">HOME</Link>/
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
                <div className="w-100 pointer mt3" style={{ height: "70vh" }}>
                  <img
                    className="relative"
                    src={mapimage}
                    alt="NUP"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div
                  className="w-100 flex flex-row justify-between mt4 fw7"
                  style={{ fontSize: "16px", cursor: "default" }}
                >
                  <div className="w-40 flex flex-column">
                    <div>Political Party: National Unity Platform</div>

                    <div className="mt2">Plot 1622/ 1623 Kira Road K'la</div>
                  </div>
                  <div className="w-40 flex flex-column ">
                    <div>
                      Website:{" "}
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://peoplepower.org.ug/"
                      >
                        www.peoplepower.org.ug
                      </a>
                    </div>

                    <div className="mt2">Email: info@nupuganda.org</div>
                  </div>
                </div>
                <div className="mt5">
                  <Title level={5} style={{ cursor: "default" }}>
                    We Want To Hear From You
                  </Title>
                </div>
                <div
                  className="mt3"
                  style={{ fontSize: "16px", cursor: "default" }}
                >
                  <div>
                    Fields marked with{" "}
                    <span style={{ color: "#ff0000" }}>*</span> are required.
                  </div>
                </div>
                <div className="mt4 w-100 mb5 flex justify-start">
                  <div className="w-100 pr5">
                    <Form id="clear" onFinish={send} {...layout} form={form}>
                      <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Email!",
                            whitespace: true,
                            type: "email",
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Email"
                          onChange={(e) => setEmail({ email: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item
                        name="name"
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
                          placeholder="Name"
                          onChange={(e) => setName({ name: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[
                          {
                            message: "Please enter your Phone!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Phone Number"
                          maxLength={15}
                          type="text"
                          onChange={(e) => setPhone({ phone: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item
                        name="location"
                        label="Location"
                        rules={[
                          {
                            message: "Please enter your location!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <Input
                          size="large"
                          placeholder="Location"
                          maxLength={15}
                          type="text"
                          onChange={(e) =>
                            setLocation({ location: e.target.value })
                          }
                        />
                      </Form.Item>
                      <Form.Item
                        name="story"
                        label="Message"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your message!",
                            whitespace: true,
                          },
                        ]}
                      >
                        <TextArea
                          rows={6}
                          style={{ fontSize: "16px" }}
                          placeholder="Type your Message here..."
                          onChange={(e) => setstory({ msg: e.target.value })}
                        />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{ ...layout.wrapperCol }}
                        className="w-100 flex justify-end"
                      >
                        <Button
                          htmlType="submit"
                          size="large"
                          style={{
                            backgroundColor: "#ff0000",
                            borderColor: "#ff0000",
                          }}
                          type="primary"
                          className="w-100 mt4 mb5"
                        >
                          <div className="flex flex-row justify-center">
                            <div className="mr4">Submit</div>
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "white",
                                  size: "30px",
                                }}
                              >
                                <div className="pointer arrow fw8">
                                  <BsArrowRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                          </div>
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </Content>
            <Sider theme="light" width={300}>
              <div className="w-100 ml3 mt5">
                <div
                  className="w-100  pl3 pr3 pt4 pb4"
                  style={{ backgroundColor: "#0C0474" }}
                >
                  <Title
                    style={{ color: "white", cursor: "default" }}
                    level={4}
                  >
                    Volunteer Today
                  </Title>
                  <div
                    style={{
                      color: "white",
                      fontsize: "16px",
                      cursor: "default",
                    }}
                  >
                    Sign Up to volunteer, Help us reach the message to the rest
                    of the country. <br />
                    Kyagulanyi For President 2021.{" "}
                  </div>
                  <div className=" w-100 mt3">
                    {/* {firebase.auth().currentUser.displayName} */}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://peoplepower.org.ug/donate/"
                >
                  <div
                    className="w-100  pl3 pr3 pt4 pb4 mt4 pointer"
                    style={{ backgroundColor: "#ff0000" }}
                  >
                    <Title
                      style={{ color: "white", cursor: "default" }}
                      level={4}
                    >
                      Muda ku Muda Campaign
                    </Title>
                    <div
                      className="fw7 white mt2"
                      style={{ fontStyle: "16px" }}
                    >
                      Donate to Support Us
                    </div>
                  </div>
                </a>

                <div
                  className="w-100  pl3 pr3 pt4 pb4 mt4 pointer"
                  style={{
                    backgroundColor: "#00acee50",
                    border: "10px",
                    borderColor: "blue",
                  }}
                >
                  <Title
                    style={{
                      color: "white",
                      cursor: "default",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    level={4}
                  >
                    <div className="mr2">
                      <IconContext.Provider
                        value={{
                          color: "#00acee",
                          size: "17px",
                        }}
                      >
                        <div className="pointer  ">
                          <GrTwitter />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div>Latest Tweets</div>
                  </Title>
                  <div className="fw7 white mt2" style={{ fontStyle: "16px" }}>
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="HEBobiwine"
                      options={{
                        tweetLimit: "2",
                        width: "100%",
                        height: "100%",
                      }}
                      noHeader="true"
                      noBorders="true"
                      noFooter="true"
                    ></TwitterTimelineEmbed>
                  </div>
                </div>
              </div>
            </Sider>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default connect(null,mapDispatchToProps)(LargeScreen);
