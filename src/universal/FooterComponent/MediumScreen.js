import React from "react";
import "./css/footercomponent.css";
import { Space } from "antd";
import { FaRegCopyright } from "react-icons/fa";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FiChevronsRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Layout } from "antd";
import flag from "../../lotties/flag.jpg";
import peoplepower from "../../lotties/peoplepower.png";
import nup from "../../lotties/nup.png";
import VolunteerForm from "../VolunteerForm/VolunteerForm"

const { Content } = Layout;

const MediumScreen = () => {
  return (
    <Layout>
      <Content>
        <div className="w-100   flex flex-column justify-center">
          <div className=" w-100 tbg flex justify-center">
            <div className="w-90 flex flex-row justify-between">
              <div className=" w-50 mt4 mb4">
                <div className="fw7 " style={{ fontSize: "2.5vw" }}>
                  Kyagulanyi can't win this struggle without you. sign up to
                  volunteer Today.
                  <br /> Lets do this together!
                </div>
                <div style={{ fontSize: "1vw" }}>
                  Thank you for joining our campaign to elect Kyagulanyi. By
                  providing your mobile phone number you consent to recieve
                  recurring text messages from Kyagulanyi for president 2021.
                  Text STOP to opt out.{" "}
                  <span className="fw5">Terms and Conditions and Privacy policy</span>
                </div>
              </div>  
                  <div className="w-33 mt3">
                    <VolunteerForm/>
                  </div>
            </div>
          </div>
          <div className="fh vh-75 w-100 relative">
            <img src={flag} alt="flag" className="imgbg" />
            <div className="absolute   w-100 h-100 overlay flex flex-column justify-between">
              <div className=" w-100 flex justify-center">
                <div className="w-90 flex flex-row justify-between  white">
                  <div>
                    <div className="mt3  fw6" style={{fontSize:"1.3vw"}}>About</div>
                    <div className="mt4 " style={{fontSize:"1.2vw"}}>
                      This website is designed,coded and paid for by{" "}
                      <span className="pointer" style={{ color: "#0C0474" }}>
                        Jemba Tony
                      </span>
                      .<br />
                      Made with Love for a better Uganda.
                      <br />
                      Kyagulanyi For President.
                    </div>
                    <div className="mt3 f5" style={{fontSize:"1.2vw"}}>
                      Email Us:{" "}
                      <span className="pointer" style={{ color: "#0C0474",fontSize:"1.2vw" }}>
                        info@nupuganda.org
                      </span>
                    </div>
                    <div className="mt2 f5" style={{fontSize:"1.2vw"}}>
                      Visit Us:{" "}
                      <span className="pointer" style={{ color: "#0C0474",fontSize:"1.2vw" }}>
                        Plot 1622/ 1623 Kira Road K'la
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="mt3  fw6" style={{fontSize:"1.3vw"}}>Quick Links</div>
                    <div className="flex flex-row justify-between mt4">
                      <Space size="large">
                        <div>
                          <div className="flex flex-row">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Home</div>
                          </div>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Donate</div>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Issues</div>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Videos</div>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>join Us</div>
                          </div>{" "}
                        </div>
                        <div>
                          <div className="flex flex-row">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>News</div>
                          </div>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1 ">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Events</div>
                          </div>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>About</div>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>FAQ</div>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}>
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div className="pointer " style={{fontSize:"1.2vw"}}>Contact</div>
                          </div>
                        </div>
                      </Space>
                    </div>
                  </div>
                  <div>
                    <div className="mt3  fw6" style={{fontSize:"1.3vw"}}>Latest Posts</div>
                    <div className="mt4">
                      <div className=" w-90" style={{fontSize:"1.2vw"}}>
                        We are unvieling a new campaing...
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="myc" style={{fontSize:"1.2vw"}}>05 Nov, 2020</div>
                        <div className="pointer hover-red" style={{fontSize:"1.2vw"}}>Read More</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="nupmd">
                      <img src={nup} alt="nup" className="imgbg " />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-100 flex btm justify-center items-center">
                <div className="w-90 flex flex-row justify-between white">
                  <div className="fw5 h-100 flex items-center pt3" style={{fontSize:"1.1vw"}}>
                    copyright
                    <span className="red mt1">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "17px",
                        }}>
                        <span className="pointer mt1 ml1 mr1">
                          <FaRegCopyright />
                        </span>
                      </IconContext.Provider>
                    </span>
                    2020-2021. All Rights Reserved. Coded by{" "}
                    <span className="pointer ml1" style={{ color: "#0C0474" }}>
                      Jemba Tony
                    </span>
                  </div>
                  <div className="flex flex-row">
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
                      <div className=" mt2  pp pointer">
                        <img
                          src={peoplepower}
                          alt="peoplepower"
                          className="imgbg"
                        />
                      </div>
                    </Space>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default MediumScreen;
