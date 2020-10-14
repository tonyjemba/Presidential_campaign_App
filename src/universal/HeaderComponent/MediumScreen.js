import React, { useState, useEffect } from "react";
import "./css/headercomponent.css";
import { Space, Badge } from "antd";
import Sticky from "react-sticky-el";
import {  MdEmail } from "react-icons/md";
import { Link} from "react-router-dom";
import { GrMapLocation, GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";
import real from "../../lotties/real.png";
const MediumScreen = () =>{
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
   return(
  <div className="bckgrnd ">
    <div
        className=" flex-column items-center flex w-100  "
        style={{ backgroundColor: `${headerBg}` }}>
        <div className="w-100  tosection flex justify-center">
          <div className="flex flex-row innercontwidth   justify-between">
            <div className="w-75 flex  justify-between">
              <Space size="large">

                <div className="items-center flex flex-row">
                  <Space>
                    <div className=" mt1 items-center flex justify-center">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "17px",
                        }}>
                        <div className="pointer  ">
                          <MdEmail />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div>info@nupuganda.org</div>
                  </Space>
                </div>
                <div>
                  <Space>
                    <div className=" mt1 items-center flex justify-center">
                      <IconContext.Provider
                        value={{
                          color: "black",
                          size: "17px",
                        }}>
                        <div className="pointer  ">
                          <GrMapLocation />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div>Plot 1622/ 1623 Kira Road K'la</div>
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
        <div className="w-100 sticky">
          <Sticky topOffset={500} stickyClassName={`${headerBg} `}>
            <div className=" flex items-center justify-center w-100">
              <div className="innercontwidth  flex flex-row justify-between mt2 mb3 ">
                <div className="w-75  flex flex-row  justify-between ">
                  <div className="mr2 pointer logo w-33">
                    <img src={real} alt="logo" height={30} />
                  </div>
                  <Space size="large">
                    <div className="pointer fw7" style={{ color: "#311B92" ,fontSize:"1.5vw"}}>
                      {" "}
                      <Link to="/">HOME</Link>
                    </div>

                    <div className="pointer fw7" style={{ color: "#311B92" ,fontSize:"1.5vw"}}>
                      <Link to="/events">EVENTS</Link>
                    </div>
                    <div className="pointer fw7" style={{ color: "#311B92",fontSize:"1.5vw" }}>
                    <Link to="/news">NEWS</Link>
                    </div>
                    <div className="pointer fw7" style={{ color: "#311B92",fontSize:"1.5vw" }}>
                      <Link to="/videos">VIDEOS</Link>
                    </div>
                    <div className="pointer fw7" style={{ color: "#311B92",fontSize:"1.5vw" }}>
                      ABOUT
                    </div>
                    <div className="pointer fw7" style={{ color: "#311B92",fontSize:"1.5vw" }}>
                      CONTACT
                    </div>
                    <div className="pointer fw7" style={{ color: "#311B92",fontSize:"1.5vw" }}>
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
                            }}>
                            <div className="pointer  ">
                              <IoMdCart />
                            </div>
                          </IconContext.Provider>
                        </div>
                      </Badge>
                    </div>
                    <div className="tosection hover-bg-dark-red pointer pa2 pl3 pr3 Hbtn">
                      <div className="pointer fw7" style={{ color: "#311B92" }}>
                        DONATE
                      </div>
                    </div>
                  </Space>
                </div>
              </div>
            </div>
          </Sticky>
        </div>
      </div>
  </div>
)};
export default MediumScreen;
