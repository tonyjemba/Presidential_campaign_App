import React from "react";
import { Layout, Typography, Input } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { FaFistRaised,FaRegLifeRing } from "react-icons/fa";
import "./css/about.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiStorybook } from "react-icons/si"

import { IconContext } from "react-icons";
import about from "../lotties/about.png";

const { Content, Sider } = Layout;
const { Title } = Typography;
const { TextArea } = Input;

const LargeScreen = () => {
  return (
    <div>
      <Layout style={{ backgroundColor: "#0C0474" }}>
        <Sider theme="light" width="30%" style={{ backgroundColor: "#0C0474" }}>
          <div className="phwid" >
            
            <div className="relative">
                            <img
                className="relative"
              src={about}
              alt="Kyagulanyi"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
              />
              <div className="w-100 imgdown absolute bottom-0 h-100"><div style={{color:"#0C0474"}}>HE</div> </div>
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
                      style={{ color: "#ffffff", Cursor: "default", paddingTop: "10%" }}>
                      KYAGULANYI'S STORY
                    </Title>
                  </div>
                  <VerticalTimeline>
       
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0b047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                        marginRight: "20px",
                      }}
                      icon={<SiStorybook/>}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                                                Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                                                Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
       <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0b047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                        
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0b047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0C047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0C047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
                 <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0C047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
                      </div>
                    </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work "
                      contentStyle={{ background: "#0C047400", color: "#ffffff",marginRight:"10px" }}
                      contentArrowStyle={{ borderRight: "7px solid  #ff0000" }}
                      date="2011 - present"
                      iconStyle={{
                        background: "#0C0474",
                        color: "#ffffff",
                      }}
                      icon={<FaRegLifeRing />}
                    >
                      <h3 className="vertical-timeline-element-title white">
                        Art Director
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle ehite">
                        San Francisco, CA
                      </h4>
                      <div className="white " style={{fontSize:"14px"}}>
                        Creative Direction, User Exerience, Visual Design, SEO, Online
                        MarketingCreative Direction, User Experience, Visual Design, SEO, Online
                        Marketing
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
              style={{ color: "#ffffff", Cursor: "default", paddingTop: "10%" }}>
              THAT'S KYAGULANYI'S STORY-WHAT IS YOURS?
            </Title>
          </div>
        </div>
        <div className="w-100 flex   justify-center mt4">
          <div className="w-60 flex flex-column">
            <div>
              <Input placeholder="Email" size="large" />
            </div>
            <div className="w-100 flex flex-row justify-between mt3">
              <div className="w-40 ">
                <Input placeholder="First Name" size="large" />
              </div>
              <div className="w-40">
                <Input placeholder="Phone Number" size="large" />
              </div>
            </div>
            <div className="w-100 mt3">
              <TextArea rows={6} placeholder="What is your Story..." />
            </div>
            <div className="w-100 mt4 mb5 flex justify-center">
              <div
                className="fw7 relative Hbtn redbg hover-bg-dark-red  pointer pt2 pb2 pl5 pr5 ml4"
                style={{ fontSize: "1.35vw", color: "#ffffff" }}>
                <div className="absolute arrow " style={{ top: "8%", right: "9%" }}>
                  <IconContext.Provider
                    value={{
                      color: "white",
                      size: "30px",
                    }}>
                    <div className="pointer arrow fw8">
                      <BsArrowRight />
                    </div>
                  </IconContext.Provider>
                </div>
                Send it To Kyagulanyi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreen;
