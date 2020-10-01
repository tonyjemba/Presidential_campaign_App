import React, { useState, useEffect } from "react";
import { Layout, Space, Badge, Drawer } from "antd";
import "./css/main.css";
import Sticky from "react-sticky-el";
import animationData from "../lotties/humberg.json";
import Lottie from "react-lottie";
import { MdPhone, MdEmail } from "react-icons/md";
import { GrMapLocation, GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";

const { Footer, Content } = Layout;

const SmallScreen = () => {
  const [headerBg, setheaderBg] = useState("");
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setheaderBg("bg-orange");
      } else {
        setheaderBg("");
      }
    });
  });
  const fullHeight = global.window.innerHeight;
  const hideDrawer = () => {
    setDrawer(false);
  };
  return (
    <Layout>
      <Content>
        <Drawer
          title={
            <div className="flex flex-row justify-between">
              <div className="white"> Logo</div>
              <div className="white"> Logo</div>
              <div className=" pointer" onClick={() => setDrawer(false)}>
                <IconContext.Provider
                  value={{
                    color: "white",
                    size: "30px",
                  }}>
                  <div className="pointer  ">
                    <CgClose />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          }
          height={fullHeight}
          placement="top"
          headerStyle={{ borderBottom: "0px", backgroundColor: "#0C0474" }}
          footerStyle={{ backgroundColor: "#0C0474", borderTop: "0px" }}
          bodyStyle={{ backgroundColor: "#0C0474" }}
          closable={false}
          onClose={hideDrawer}
          visible={drawer}
          footer={<div className="flex justify-center items-center">
             <Space size="large">
                  <div className=" mt1 items-center flex justify-center">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "15px",
                        // className: "global-class-name",
                      }}>
                      <div className="pointer  ">
                        <GrFacebook />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className=" mt1 items-center flex justify-center">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "15px",
                        // className: "global-class-name",
                      }}>
                      <div className="pointer  ">
                        <GrTwitter />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className=" mt1 items-center flex justify-center">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "15px",
                        // className: "global-class-name",
                      }}>
                      <div className="pointer  ">
                        <RiInstagramFill />
                      </div>
                    </IconContext.Provider>
                  </div>
                  <div className=" mt1 items-center flex justify-center">
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "15px",
                        // className: "global-class-name",
                      }}>
                      <div className="pointer  ">
                        <RiInstagramFill />
                      </div>
                    </IconContext.Provider>
                  </div>
                </Space>
          </div>}>
          <div className="flex justify-center flex-column mt4 items-center">
            <Space direction="vertical" size="large">
              <div className="pointer white">HOME</div>
              <div className="pointer white">ISSUES</div>
              <div className="pointer white">EVENTS</div>
              <div className="pointer white">NEWS</div>
              <div className="pointer white">ABOUT</div>
              <div className="pointer white">STORE</div>
            </Space>
          </div>
        </Drawer>
        <div
          className="absolute flex-column items-center flex w-100  "
          style={{ backgroundColor: `${headerBg}` }}>
          <div className="w-100">
            <Sticky topOffset={300} stickyClassName={`${headerBg}`}>
              <div className=" flex items-center justify-center w-100">
                <div className="hwidth flex flex-row justify-between mt2 mb3 ">
                  <div className="w-60  flex flex-row items-center justify-between ">
                    <div className="pointer " onClick={() => setDrawer(true)}>
                      <Lottie
                        options={{
                          animationData: animationData,
                          loop: false,
                          autoplay: false,
                          rendererSettings: {
                            preserveAspectRatio: "xMidYMid slice",
                          },
                        }}
                        height={40}
                        width={40}
                      />
                    </div>
                  </div>
                  <div className="w-25 flex    justify-end">
                    <Space size="large">
                      <div>
                        <Badge showZero={true} offset={[4, 3]} count={0}>
                          <div className=" mt1 items-center flex justify-center">
                            <IconContext.Provider
                              value={{
                                color: "#0C0474",
                                size: "19px",
                                // className: "global-class-name",
                              }}>
                              <div className="pointer  ">
                                <IoMdCart />
                              </div>
                            </IconContext.Provider>
                          </div>
                        </Badge>
                      </div>
                      <div className="bg-red pointer pa2 pl3 pr3">Donate</div>
                    </Space>
                  </div>
                </div>
              </div>
            </Sticky>
          </div>
        </div>
        <HomeHeroContainer />
      </Content>
      <Content>
        <div className="vh-75 bg-blue">other content here</div>
      </Content>
      <Footer>
        <div className="bg-green">tihs is the </div>
      </Footer>
    </Layout>
  );
};
export default SmallScreen;
