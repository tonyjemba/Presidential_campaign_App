import React from "react";
import "./css/footercomponent.css";
import { Space } from "antd";
import { FaRegCopyright } from "react-icons/fa";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FiChevronsRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import peoplepower from "../../lotties/peoplepower.png";
import { useSelector } from "react-redux";
import { useFirestoreConnect,} from "react-redux-firebase";

const { Content } = Layout;

const SmallScreen = () => {
    useFirestoreConnect([
    { collection: 'images' }
  ]);
  const images = useSelector((state) => state.firestore.ordered.images);
  const backgroundImage = images && images[2].imageUrl;
   const NupImage = images && images[5].imageUrl;
  return (
    <Layout>
      <Content>
        <div className="w-100   flex flex-column justify-center">
          <div>
            <div className=" w-100 tbg flex justify-center">
              <div className="w-90 flex flex-row justify-between">
                <div className=" w-50  mb4">
                  <div className="fw7 " style={{ fontSize: "18px" }}>
                    Kyagulanyi can't win this struggle without you. sign up to
                    volunteer Today.
                    <br /> Lets do this together!
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    Thank you for joining our campaign to elect Kyagulanyi. By
                    providing your details you consent to recieve recurring text
                    messages from Kyagulanyi for president 2021.
                    <Link to="/volunteer" style={{color:"#ffffff"}}>click here</Link> to opt out.{" "}
                    <span className="fw5">
                      Terms and Conditions and Privacy policy
                    </span>
                  </div>
                </div>
                <div className="w-33 mt2 mb2">{/* <VolunteerForm /> */}</div>
              </div>
            </div>
          </div>
          <div className="fh vh-75 w-100 relative">
            <img src={backgroundImage} alt="flag" className="imgbg" />
            <div className="absolute   w-100 h-100 overlay flex flex-column justify-between">
              <div className=" w-100 flex justify-center">
                <div className="w-90 flex flex-row justify-between  white">
                  <div>
                    <div className="mt3  fw6" style={{ fontSize: "14px" }}>
                      About
                    </div>
                    <div className="mt4 " style={{ fontSize: "14px" }}>
                      This website is designed,coded and paid for by supporters
                      <br />
                      Made with Love for a better Uganda.
                      <br />
                      Kyagulanyi For President.
                    </div>
                    <div className="mt3 f5" style={{ fontSize: "14px" }}>
                      Email Us:{" "}
                      <span
                        className="pointer"
                        style={{ color: "#0C0474", fontSize: "14px" }}
                      >
                        info@nupuganda.org
                      </span>
                    </div>
                    <div className="mt2 f5" style={{ fontSize: "14px" }}>
                      Visit Us:{" "}
                      <span
                        className="pointer"
                        style={{ color: "#0C0474", fontSize: "14px" }}
                      >
                        Plot 1622/ 1623 Kira Road K'la
                      </span>
                    </div>
                    <div className="nupsm">
                      <img src={NupImage} alt="nup" className="imgbg " />
                    </div>
                  </div>
                  <div>
                    <div className="mt3  fw6" style={{ fontSize: "14px" }}>
                      Quick Links
                    </div>
                    <div className="flex flex-row justify-between mt4">
                      <Space size="large">
                        <div>
                          <Link to="/">
                            <div className="flex flex-row">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "8",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1 "
                                style={{ fontSize: "14px" }}
                              >
                                Home
                              </div>
                            </div>
                          </Link>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "8",
                                }}
                              >
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <a
                              target="_blank"
                              href="https://peoplepower.org.ug/donate/"
                            >
                              <div
                                className="pointer "
                                style={{ fontSize: "14px" }}
                              >
                                Donate
                              </div>
                            </a>
                          </div>{" "}
                          <Link to="/store">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>

                              <a
                                target="_target"
                                href="https://kyagulanyi2021stores.bigcartel.com/"
                              >
                                <div
                                  className="pointer "
                                  style={{ fontSize: "14px" }}
                                >
                                  Store
                                </div>
                              </a>
                            </div>
                          </Link>
                          <Link to="/videos">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1"
                                style={{ fontSize: "14px" }}
                              >
                                Videos
                              </div>
                            </div>{" "}
                          </Link>
                          <Link to="/getInvolved">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1 "
                                style={{ fontSize: "14px" }}
                              >
                                Get Involved
                              </div>
                            </div>{" "}
                          </Link>
                        </div>
                        <div>
                          <Link to="/news">
                            <div className="flex flex-row">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1"
                                style={{ fontSize: "14px" }}
                              >
                                News
                              </div>
                            </div>
                          </Link>
                          <Link to="/events">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1 ">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1"
                                style={{ fontSize: "14px" }}
                              >
                                Events
                              </div>
                            </div>
                          </Link>
                          <Link to="/about_Kyagulanyi">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1"
                                style={{ fontSize: "14px" }}
                              >
                                About
                              </div>
                            </div>
                          </Link>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "1.3vw",
                                }}
                              >
                                <div className="pointer mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div
                              className="pointer mt1 "
                              style={{ fontSize: "14px" }}
                            >
                              <a
                                target="_blank"
                                href="https://peoplepower.org.ug/faqs/"
                              >
                                FAQ
                              </a>
                            </div>
                          </div>{" "}
                          <Link to="/contact">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "1.3vw",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer mt1"
                                style={{ fontSize: "14px" }}
                              >
                                Contact
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Space>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-100 flex btm justify-center items-center">
                <div className="w-90 flex flex-row justify-between white">
                  <div
                    className="fw5 h-100 flex items-center  "
                    style={{ fontSize: "9px", marginTop: "6%" }}
                  >
                    copyright
                    <span className="red mt1">
                      <IconContext.Provider
                        value={{
                          color: "white",
                          size: "10px",
                        }}
                      >
                        <span className="pointer mt1 ml1 mr1">
                          <FaRegCopyright />
                        </span>
                      </IconContext.Provider>
                    </span>
                    2020-2021. All Rights Reserved. Coded by{" "}
                    <span className="pointer ml1" style={{ color: "#0C0474" }}>
                      <a
                        target="_blank"
                        href="https://www.twitter.com/TonyJjemba"
                      >
                        Jemba Tony
                      </a>
                    </span>
                  </div>
                  <div className="flex flex-row">
                    <Space size="middle">
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "11px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              href="https://www.facebook.com/www.bobiwine.ug/"
                            >
                              <GrFacebook />
                            </a>
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "11px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              href="https://www.twitter.com/HEBobiwine"
                            >
                              <GrTwitter />
                            </a>
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "11px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              href="https://www.instagram.com/bobiwine"
                            >
                              <RiInstagramFill />
                            </a>
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
export default SmallScreen;
