import React, { useState } from "react";
import { Layout, Typography, Input, message, Form, Button } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { FaFistRaised, FaRegLifeRing } from "react-icons/fa";
import "./css/about.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiStorybook } from "react-icons/si";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { addStory } from "../Redux/Admin/Actions";

const { Content, Sider } = Layout;
const { Title } = Typography;
const { TextArea } = Input;
const mapDispatchToProps = (dispatch) => {
  return {
    addStory: (story) => dispatch(addStory(story)),
  };
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const LargeScreen = ({ addStory }) => {
  const [email, setEmail] = useState({ email: "" });
  const [name, setName] = useState({ name: "" });
  const [phone, setPhone] = useState({ phone: "" });
  const [story, setStory] = useState({ story: "" });
  const [form] = Form.useForm();

      useFirestoreConnect([
    { collection: 'images' }
  ]);
  const images = useSelector((state) => state.firestore.ordered.images);
   const bobimage = images && images[3].imageUrl;
  const send = () => {
    addStory({ ...email, ...name, ...phone, ...story });
    form.resetFields();
    message.success("Your Story has been sent!", 3);
    setEmail({ email: "" });
    setName({ name: "" });
    setPhone({ phone: "" });
    setStory({ story: "" });
  };

  return (
    <div>
      <Layout style={{ backgroundColor: "#0C0474" }}>
        <Sider theme="light" width="30%" style={{ backgroundColor: "#0C0474" }}>
          <div className="phwid">
            <div className="relative">
              <img
                className="relative"
                src={bobimage}
                alt="Kyagulanyi"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className="w-100 imgdown absolute bottom-0 h-100">
                <div style={{ color: "#0C0474" }}>HE</div>{" "}
              </div>
            </div>
          </div>
        </Sider>
        <Content style={{ backgroundColor: "#0C0474" }}>
          <div className="w-100 flex justify-center">
            <div className="w-90">
              <div className="w-100 mt6">
                <div>
                  <div className="w-100 tc mt4 fw7 ">
                    <Title
                      level={6}
                      style={{
                        color: "#ffffff",
                        Cursor: "default",
                        paddingTop: "10%",
                      }}
                    >
                      KYAGULANYI'S STORY
                    </Title>
                  </div>
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0b047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                        marginRight: "20px",
                      }}
                      icon={<SiStorybook />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Member of Parliament
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        Kampala, UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0b047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0b047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0C047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0C047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0C047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{
                        background: "#0C047400",
                        color: "#ffffff",
                        marginRight: "10px",
                      }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        President
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        kampala,UG
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        about Kyagulanyi....
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      iconStyle={{ background: "#0C0474", color: "#ffffff" }}
                      icon={<FaFistRaised />}
                    />
                  </VerticalTimeline>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
      <div style={{ backgroundColor: "#0C0474" }}>
        <div className="pt5 w-100">
          <div className="w-100 tc ">
            <Title
              level={4}
              style={{ color: "#ffffff", Cursor: "default", paddingTop: "10%" }}
            >
              THAT'S KYAGULANYI'S STORY-WHAT IS YOURS?
            </Title>
          </div>
        </div>
        <div className="w-100 flex   justify-center mt4">
          <div className="w-60 flex flex-column mt4">
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
                    required: true,
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
                name="story"
                label="Story"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Story!",
                    whitespace: true,
                  },
                ]}
              >
                <TextArea
                  rows={6}
                  style={{ fontSize: "16px" }}
                  placeholder="What is your Story..."
                  onChange={(e) => setStory({ story: e.target.value })}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button
                  htmlType="submit"
                  size="large"
                  style={{ backgroundColor: "#ff0000" }}
                  type="primary"
                  className="w-100 mt4 mb5"
                >
                  <div className="flex flex-row justify-center">
                    <div className="mr4">Send it To Kyagulanyi</div>
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
    </div>
  );
};

export default connect(null, mapDispatchToProps)(LargeScreen);
