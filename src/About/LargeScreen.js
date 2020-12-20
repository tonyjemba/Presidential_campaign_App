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
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                        marginRight: "20px",
                      }}
                      icon={<SiStorybook />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        BACKGROUND
                      </h3>

                      <div className="white " style={{ fontSize: "14px" }}>
                        Robert Kyagulanyi Ssentamu also known by his stage name
                        Bobi Wine is a Ugandan politician, singer, actor, and
                        businessman. He was born on 12 February 1982 in Nkozi
                        Hospital, where his late mother worked. He grew up in
                        the Kamwokya slum in the northeastern part of Kampala,
                        the capital city of Uganda.
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
                      date="1986 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        EDUCATION
                      </h3>

                      <div className="white " style={{ fontSize: "14px" }}>
                        Kyagulanyi attended St Maria Goretti Nursery School,
                        Kanoni Catholic School, Kitante Hill School, where he
                        attained his Uganda Certificate of Education in 1996, as
                        well as Kololo Senior Secondary School, where he
                        attained his Uganda Advanced Certificate of Education in
                        1998. He then attended Makerere University in Kampala,
                        where he studied music, dance, and drama, graduating
                        with a diploma in 2003. In 2016, Kyagulanyi returned to
                        university to study law at the International University
                        of East Africa (IUEA). Later joined Cavendish University
                        Uganda to study for the same. He also studied Leadership
                        for 21st Century at Harvard University and still a
                        student at many universities.
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
                      date="2000 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        PERSONAL LIFE
                      </h3>
                      <div className="white " style={{ fontSize: "14px" }}>
                        While studying at Makerere University, Kyagulanyi met
                        his wife, Barbara Itungo, who at the time was an S6
                        student at Bweranyangi Girls' Senior Secondary School.
                        Their wedding took place in August 2011. They have four
                        children together: Solomon Kampala Nyanzi, Shalom
                        Namagembe, Shadraq Shilling Mbogo, and Suubi Shine
                        Nakaayi. Kyagulanyi and his family reside in Magere
                        Village, Wakiso District.
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
                      date="2000 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        MUSIC AND FILM CAREER
                      </h3>

                      <div className="white " style={{ fontSize: "14px" }}>
                        Kyagulanyi began his music career in the early 2000s and
                        adapted the stage name Bobi Wine. His first singles
                        "Akagoma", "Funtula", and "Sunda" brought him success in
                        the East African music scene. His music has been
                        characterized as reggae, dancehall, and afrobeat, often
                        with a socially conscious message. He was the leader of
                        the group Fire Base Crew until its disbandment, after
                        which he started a new group known as Ghetto Republic of
                        Uganda. He has released more than 70 songs over 15
                        years. In 2016, his song "Kiwani" was featured on the
                        soundtrack for the Disney movie Queen of Katwe.
                        Kyagulanyi is also a film actor, mainly starring in
                        local Ugandan movies.
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
                      date="2017 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        POLITICAL CAREER
                      </h3>
                      <div className="white " style={{ fontSize: "14px" }}>
                        In April 2017, Kyagulanyi announced his candidacy for
                        parliament in an upcoming by-election for Kyadondo
                        County East constituency. His door-to-door walking
                        campaign attracted attention both in Uganda and
                        abroad.He won the contest by a wide margin, beating two
                        seasoned candidates. In 2018, Kyagulanyi gained
                        increasing fame, championing the victories in most of
                        the by-elections by the candidates he campaigned for.
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
                      date="2019 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        PRESIDENTIAL CANDIDATE
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        Uganda
                      </h4>
                      <div className="white " style={{ fontSize: "14px" }}>
                        On 24 July 2019, Kyagulanyi formally announced his bid
                        to run for president in the 2021 general election. On 22
                        July 2020, he announced that he had joined the National
                        Unity Platform party, becoming elected its president and
                        presidential flag-bearer in the upcoming February 2021
                        general election. On 6 November 2020, he launched his
                        campaign manifesto in Mbarara.
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
