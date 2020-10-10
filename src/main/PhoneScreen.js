import React from "react";
import { Layout, Collapse, Affix, Button,Typography } from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import VolunteerForm from "../universal/VolunteerForm/VolunteerForm";
import EventsComponent from "../universal/EventsComponent/EventsComponent";
import { CaretRightOutlined } from "@ant-design/icons";
import {FaRegFileVideo} from "react-icons/fa";
import {IconContext} from "react-icons";

const text = `please gt srs this might be a tp in your life so get onto it and do it like iit  no mas bsnss
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;

const { Panel } = Collapse;
const { Content } = Layout;
const {Title} = Typography;
const PhoneScreen = () => {
  return (
    <div className="relative">
      <Layout className="bg">
        <Layout>
          <Content className="transparent wh">
            <HomeHeroContainer />
          </Content>
        </Layout>
        <Layout className="top">
          <Content className="bg-white">
            <div className="w-100 flex flex-column justify-center items-center">
              <div
                className="w-100 "
                style={{ backgroundColor: "#0C0474" }}>
                <div className="w-100 ">
                  <div className="w-100 mt3  flex flex-column justify-between">
                    <div
                      className="h-100  tc w-100 white fw7"
                      style={{ fontSize: "4.8vw" }}>
                      Finally A  Cause That's  Worth Our Full Attention.
                    </div>
                    <div className="w-100  h-100 ">
                      <div
                        className="fw7 w-100 tc white mb1 mt3"
                        style={{ fontSize: "3vw" }}>
                        Sign up to Volunteer.
                      </div>
                      <div className="w-100 flex  items-center justify-center">
                        <div className=" w-90"><VolunteerForm  /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Affix
                  offsetTop={150}>
                  <Button type="primary">
                  <div className="flex">
                  <div>
                    <IconContext.Provider
                    value={{
                      color: "white",
                      size: "18px",
                    }}>
                    <div className="pointer mr2 ">
                      <FaRegFileVideo />
                    </div>
                  </IconContext.Provider>
                    </div>
                    <div>Upload Video</div>
                  </div>
                  </Button>
                </Affix>
              </div>
              <div className="mt5">
                <Title level={3}>Kyagulanyi's Priorities</Title>
              </div>
              <div
                className="w-100  tc  pa0 mb3   flex justify-center "
                style={{ fontSize: "0.5vw", cursor: "default", top: "100%" }}>
                <div
                  className="ml2 mr2"
                  style={{ color: "#ff0000", backgroundColor: "#ff0000" }}>
                  llljemba tonylllllljemba tonylll
                </div>
              </div>
              <div
                className="w-90  tc  "
                style={{ fontSize: "16px", color: "#000000" }}>
                  The middle class isn't a number - it's
                Collaboratively build a Uganda that we all desire to live in...
                manifesto manifesto manifestomanifesto manifestomanifesto
                manifestomanifesto manifestomanifesto manifestomanifesto
                manifestomanifesto manifestomanifestomanifesto
              </div>
            </div>
           <Layout style={{backgroundColor:"#ffffff"}}>
             <Content className="mb6" style={{backgroundColor:"#ffffff"}}>
             <div className="w-100 mt5 flex justify-center items-center">
              <div className="w-90 ">
               
                <div className=" w-100" style={{ height: "40vh" }}>
                  <Collapse
                    defaultActiveKey={["1"]}
                    ghost
                    expandIconPosition="right"
                    accordion
                    expandIcon={({ isActive }) => (
                      <div
                        className="pointer flex justify-center items-center"
                        style={{
                          backgroundColor: `${
                            isActive ? "#ff0000" : "#0C0474"
                          }`,
                          borderRadius: "50%",
                        }}>
                        <CaretRightOutlined
                          rotate={isActive ? -90 : 90}
                          className="pa2 "
                          style={{ color: "#ffffff" }}
                        />
                      </div>
                    )}>
                    <Panel header={<Title level={4}>This is panel header 1</Title>} key="1">
                      <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 2</Title>} key="2">
                    <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 3</Title>} key="3">
                    <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 4</Title>} key="4">
                    <div style={{fontsize:"16px",color:"#000000"}}>{text}</div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
             </Content>
           </Layout>
            <div className="w-100  flex justify-center items-center">
              <div className="w-90  flex flex-column ">
                <div
                  className="w-100 fw8 tc mc relative"
                  style={{
                    height: "50vh",
                    fontSize: "18vw",
                    cursor: "default",
                  }}>
                  <div className="tc w-100 absolute  black" style={{top:"20%"}}>
                    <div style={{ fontSize: "7vw" ,}}>
                      {" "}
                      Events During <br /> The Struggle
                    </div>
                    <span
                      className="w-100  tc  pa0  absolute  flex justify-center"
                      style={{ fontSize: "0.5vw", top: "100%" }}>
                      <span
                        style={{
                          color: "#ff0000",
                          backgroundColor: "#ff0000",
                        }}>
                        llljemba tonylll
                      </span>
                    </span>
                  </div>
                  MISSION <br /> 2021
                </div>
                <div className=" w-60" >
                  <EventsComponent />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default PhoneScreen;
