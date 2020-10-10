import React from "react";
import { Layout,Collapse,Typography  } from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import VolunteerForm from "../universal/VolunteerForm/VolunteerForm";
import EventsComponent from "../universal/EventsComponent/EventsComponent"
import { CaretRightOutlined } from "@ant-design/icons";

const text = `please gt srs this might be a tp in your life so get onto it and do it like iit  no mas bsnss
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
  `;


const {Panel} = Collapse;
const {  Content } = Layout;
const {Title} = Typography;
const MediumScreen = () => {
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
                className="w-100 flex justify-center items-center"
                style={{ backgroundColor: "#0C0474" }}>
                <div className="w-90 flex flex-row justify-between">
                  <div className=" flex flex-column Image w-33 justify-center items-center ">
                    <div
                      className="tc white fw7 mt3 mb3"
                      style={{ fontSize: "2.6vw", cursor: "default" }}>
                      POLITICAL <br /> CHANGE <br /> THROUGH <br /> ACTIVISM
                    </div>
                    <div
                      className=" Hbtn pointer tc mb4 white fw7 pt2 pb2 pl2 pr2 hover-bg-dark-red"
                      style={{ backgroundColor: "#FF0000", fontSize: "1.3vw" }}>
                      Upload Your Video
                    </div>
                  </div>
                  <div className="w-60 flex flex-row justify-between">
                    <div
                      className="h-100 flex items-center justify-center tc w-50 white fw7"
                      style={{ fontSize: "3vw" }}>
                      Finally A <br /> Cause That's <br /> Worth Our <br /> Full{" "}
                      <br /> Attention.
                    </div>
                    <div className="w-50 h-100 flex flex-column items-center justify-center">
                      <div
                        className="fw7 white "
                        style={{ fontSize: "1.8vw" }}>
                        Sign up to Volunteer.
                      </div>
                      <VolunteerForm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt6">
                <Title level={2}>Kyagulanyi's Priorities</Title>
              </div>
              <div className="w-100  tc  pa0 mb3   flex justify-center " style={{ fontSize: "0.5vw",cursor:'default',top:"100%" }}><div className="ml2 mr2" style={{color:"#ff0000", backgroundColor:"#ff0000"}}>llljemba tonylllllljemba tonylll</div></div>
              <div
                className="w-75  tc "
                style={{ fontSize: "1.8vw", color: "#000000" }}>
                Collaboratively build a Uganda that we all desire to live in...
                manifesto manifesto manifestomanifesto manifestomanifesto
                manifestomanifesto manifestomanifesto manifestomanifesto
                manifestomanifesto manifestomanifestomanifesto
              </div>
            </div>
            <div className="w-100 flex justify-center items-center ">
              <div className="w-90 ">
              <Layout style={{backgroundColor:"#ffffff"}}>
             <Content className="" style={{backgroundColor:"#ffffff"}}>
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
                      <div style={{fontsize:"2.3vw",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 2</Title>} key="2">
                    <div style={{fontsize:"2.3vw",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 3</Title>} key="3">
                    <div style={{fontsize:"2.3vw",color:"#000000"}}>{text}</div>
                    </Panel>
                    <Panel header={<Title level={4}>This is panel header 4</Title>} key="4">
                    <div style={{fontsize:"2.vw",color:"#000000"}}>{text}</div>
                    </Panel>
                  </Collapse>
                </div>
              </div>
            </div>
             </Content>
           </Layout>
              </div>
            </div>
            <div className="w-100 mt6 flex justify-center items-center">
              <div className="w-90  flex flex-row justify-between">
                <div
                  className="wid fw8 tc mc relative"
                  style={{ height: "50vh", fontSize: "7.5vw",cursor:"default" }}>
                  <div
                    className="tc w-100 absolute top-0 black"
                    >
                   <div style={{ fontSize: "3vw" }}> Events During <br /> The Struggle</div>
                    <span className="w-100  tc  pa0 mb5 absolute  flex justify-center" style={{ fontSize: "0.5vw",top:"100%" }}><span style={{color:"#ff0000", backgroundColor:"#ff0000"}}>llljemba tonylll</span></span>
                  </div>
                  
                  MISSION <br /> 2021
                </div>
                <div className=" w-60" style={{ height: "50vh" }}>
                  <EventsComponent/>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};
export default MediumScreen;
