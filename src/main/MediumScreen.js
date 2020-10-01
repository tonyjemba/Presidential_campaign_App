import React, { useState, useEffect } from "react";
import { Layout, Space, Badge } from "antd";
import "./css/main.css";
import Sticky from "react-sticky-el";
import { MdPhone, MdEmail } from "react-icons/md";
import { GrMapLocation, GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";

const { Footer, Content } = Layout;

const MediumScreen = () => {
  const [headerBg, setheaderBg] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setheaderBg("bg-orange");
      } else {
        setheaderBg("");
      }
    });
  });
  return (
    <Layout>
      <Content>
        <div
          className="absolute flex-column items-center flex w-100  "
          style={{ backgroundColor: `${headerBg}` }}>
          <div className="w-100 bg-red bg-transparent flex justify-center">
            <div className="flex flex-row hwidth   justify-between">
              <div className="w-75 flex  justify-between">
                <Space size="middle">
                  <div className=" items-center flex flex-row">
                    <Space>
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "black",
                            size: "15px",
                            // className: "global-class-name",
                          }}>
                          <div className="pointer  ">
                            <MdPhone />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div style={{ fontSize: "14px" }}>
                        call us +25678349565
                      </div>
                    </Space>
                  </div>
                  <div className="items-center flex flex-row">
                    <Space>
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "black",
                            size: "15px",
                            // className: "global-class-name",
                          }}>
                          <div className="pointer  ">
                            <MdEmail />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div>kyagulanyi2021@gmail.com</div>
                    </Space>
                  </div>
                  <div>
                    <Space>
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "black",
                            size: "15px",
                            // className: "global-class-name",
                          }}>
                          <div className="pointer  ">
                            <GrMapLocation />
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div>18th street wampewo</div>
                    </Space>
                  </div>
                </Space>
              </div>
              <div className=" w-25 flex justify-end">
                <Space size="middle">
                  <div>Follow us : </div>
                  <div className=" mt1 items-center flex justify-center">
                    <IconContext.Provider
                      value={{
                        color: "black",
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
                        color: "black",
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
                        color: "black",
                        size: "15px",
                        // className: "global-class-name",
                      }}>
                      <div className="pointer  ">
                        <RiInstagramFill />
                      </div>
                    </IconContext.Provider>
                  </div>
                </Space>
              </div>
            </div>
          </div>
          <div className="w-100">
            <Sticky topOffset={300} stickyClassName={`${headerBg}`}>
              <div className=" flex items-center justify-center w-100">
                <div className="hwidth flex flex-row justify-between mt2 mb3 ">
                  <div className="w-60  flex flex-row items-center justify-between ">
                    <div className="pointer">LOGO</div>
                    <Space size="large">
                      <div className="pointer"> HOME</div>
                      <div className="pointer">ISSUES</div>
                      <div className="pointer">EVENTS</div>
                      <div className="pointer">NEWS</div>
                      <div className="pointer">ABOUT</div>
                      <div className="pointer">STORE</div>
                    </Space>
                  </div>
                  <div className="w-25 flex    justify-end">
                    <Space size="large">
                      <div>
                        <Badge showZero={true} offset={[4, 3]} count={0}>
                          <div className=" mt1 items-center flex justify-center">
                            <IconContext.Provider
                              value={{
                                color: "black",
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
export default MediumScreen;
