import React, { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { Space, Badge } from "antd";
import Sticky from "react-sticky-el";
import { MdPhone, MdEmail } from "react-icons/md";
import { GrMapLocation, GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";
import real from "../lotties/real.png";
import HERO1 from "../lotties/HERO1.jpg";

const stylee = {
  position: "absolute",
  // backgroundColor: "white",
  display:"flex",
  justifyItems:"center",
  width: "100%",
  top: "50%",
  left: "5%",
  // padding: "20px",
  // transform: "translate(-50%,-50%)",
};
const LargeScreen = () => {
  const [headerBg, setheaderBg] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setheaderBg("bg-white");
      } else {
        setheaderBg("");
      }
    });
  });
  const imgstyle = {
    height: "500px",
    // backgroundRepeat :"no-repeat",
    // backgroundSize: "contain",
  };
  return (
    <div>
      <Parallax
        bgImage={HERO1}
        strength={300}
        bgImageAlt="Vote Kyagulanyi 2021"
        bgImageStyle={{}}>
        <div style={imgstyle}>
          <div
            className="absolute flex-column items-center flex w-100  "
            style={{ backgroundColor: `${headerBg}` }}>
            <div className="w-100  bg-transparent flex justify-center">
              <div className="flex flex-row w-90   justify-between">
                <div className="w-75 flex  justify-between">
                  <Space size="large">
                    <div className=" items-center flex flex-row">
                      <Space>
                        <div className=" mt1 items-center flex justify-center">
                          <IconContext.Provider
                            value={{
                              color: "black",
                              size: "17px",
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
                              size: "17px",
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
                              size: "17px",
                              // className: "global-class-name",
                            }}>
                            <div className="pointer  ">
                              <GrMapLocation />
                            </div>
                          </IconContext.Provider>
                        </div>
                        <div>PLot 1622/ 1623 Kira Road K'la</div>
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
                          size: "17px",
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
                          size: "17px",
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
                          size: "17px",
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
                  <div className="w-90  flex flex-row justify-between mt2 mb3 ">
                    <div className="w-60  flex flex-row  justify-between ">
                      <div className="mr2">
                        <img src={real} alt="logo" height={45} />
                      </div>
                      <Space size="large">
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          {" "}
                          HOME
                        </div>
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          ISSUES
                        </div>
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          EVENTS
                        </div>
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          NEWS
                        </div>
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          ABOUT
                        </div>
                        <div
                          className="pointer fw7"
                          style={{ color: "#311B92" }}>
                          STORE
                        </div>
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
          <div  style={stylee}>
              <div classname="pointer absolute">here</div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};
export default LargeScreen;
