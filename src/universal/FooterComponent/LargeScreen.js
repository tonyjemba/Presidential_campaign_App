import React from "react";
import "./css/footercomponent.css";
import { Space,Typography} from "antd";
import { FaRegCopyright } from "react-icons/fa";
import { GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { FiChevronsRight } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Layout } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import peoplepower from "../../lotties/peoplepower.png";
import { useSelector } from "react-redux";
import { useFirestoreConnect, } from "react-redux-firebase";

const { Content } = Layout;
const { Title } = Typography;
const mapStateToProps = (state) => {
  return {
    currentUser:state.Admin.currentUser
  }
}
const LargeScreen = ({currentUser}) => {
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
          <div className=" w-100 tbg flex justify-center">
            <div className="w-90 flex flex-row justify-between">
              <div className=" w-50 mt4 mb4">
                <div className="fw7 " style={{ fontSize: "2.5vw" }}>
                  Make Kyagulanyi win this struggle by signing in to volunteer
                  Today.
                  <br /> Lets do this together!
                </div>
                <div style={{ fontSize: "1vw" }}>
                  Thank you for joining our campaign to elect Kyagulanyi. By
                  providing your details you consent to recieve recurring text
                  messages from Kyagulanyi for president 2021.
                  <Link to="/volunteer" style={{ color: "#ffffff" }}>
                    click here
                  </Link>{" "}
                  to opt out.
                  <span className="fw5">
                    Terms and Conditions and Privacy policy
                  </span>
                </div>
              </div>
              <div id="getInvolved" className="w-33 mt5">
                {currentUser ? (
                  <div className="w-100 tc">
                    <Title
                      level={4}
                      style={{ fontWeight: "lighter", color: "#ffffff" }}
                    >
                      Welcome back {currentUser.name}!
                    </Title>
                    <Title
                      level={4}
                      style={{ fontWeight: "lighter", color: "#ffffff" }}
                    >
                      Thank You For Supporting Kyagulanyi.
                    </Title>
                  </div>
                ) : (
                  <div>
                    <Link to="/volunteer">
                      <div className="w-100 flex justify-center">
                        <div
                          className="w-50 Hbtn pointer tc mb4 white fw7 pt2 pb2 pl2 pr2 hover-bg-dark-red"
                          style={{
                            backgroundColor: "#FF0000",
                            fontSize: "16px",
                          }}
                        >
                          Sign in
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="fh vh-75 w-100 relative">
            <img src={backgroundImage} alt="flag" className="imgbg" />
            <div className="absolute   w-100 h-100 overlay flex flex-column justify-between">
              <div className=" w-100 flex justify-center">
                <div className="w-90 flex flex-row justify-between  white">
                  <div>
                    <div className="mt3  fw6" style={{ fontSize: "1.3vw" }}>
                      About
                    </div>
                    <div className="mt4 " style={{ fontSize: "16px" }}>
                      This website is designed,coded and paid for by supporters
                      .<br />
                      Made with Love for a better Uganda.
                      <br />
                      Kyagulanyi For President.
                    </div>
                    <div className="mt3 f5">
                      <Link to="/UVote">Download Uvote App</Link>
                    </div>

                    <div className="mt3 f5" style={{ fontSize: "16px" }}>
                      Email Us:{" "}
                      <span
                        className="pointer"
                        style={{ color: "#0C0474", fontSize: "16px" }}
                      >
                        info@nupuganda.org
                      </span>
                    </div>
                    <div className="mt2 f5" style={{ fontSize: "16px" }}>
                      Visit Us:{" "}
                      <span
                        className="pointer"
                        style={{ color: "#0C0474", fontSize: "16px" }}
                      >
                        Plot 1622/ 1623 Kira Road K'la
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="mt3  fw6" style={{ fontSize: "1.3vw" }}>
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
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <Link to="/">
                                <div
                                  className="pointer "
                                  style={{ fontSize: "16px" }}
                                >
                                  Home
                                </div>
                              </Link>
                            </div>
                          </Link>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "10px",
                                }}
                              >
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://peoplepower.org.ug/donate/"
                            >
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
                              >
                                Donate
                              </div>
                            </a>
                          </div>{" "}
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "10px",
                                }}
                              >
                                <div className="pointer  mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <a
                              target="_target"
                              rel="noopener noreferrer"
                              href="https://kyagulanyi2021stores.bigcartel.com/"
                            >
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
                              >
                                Store
                              </div>
                            </a>
                          </div>{" "}
                          <Link to="/videos">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
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
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
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
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
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
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1 ">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
                              >
                                Events
                              </div>
                            </div>
                          </Link>
                          <Link to="/about">
                            <div className="flex flex-row mt3">
                              <div>
                                <IconContext.Provider
                                  value={{
                                    color: "#0C0474",
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
                              >
                                About
                              </div>
                            </div>{" "}
                          </Link>
                          <div className="flex flex-row mt3">
                            <div>
                              <IconContext.Provider
                                value={{
                                  color: "#0C0474",
                                  size: "10px",
                                }}
                              >
                                <div className="pointer mr1">
                                  <FiChevronsRight />
                                </div>
                              </IconContext.Provider>
                            </div>
                            <div
                              className="pointer "
                              style={{ fontSize: "16px" }}
                            >
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
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
                                    size: "10px",
                                  }}
                                >
                                  <div className="pointer  mr1">
                                    <FiChevronsRight />
                                  </div>
                                </IconContext.Provider>
                              </div>
                              <div
                                className="pointer "
                                style={{ fontSize: "16px" }}
                              >
                                Contact
                              </div>
                            </div>
                          </Link>
                        </div>
                      </Space>
                    </div>
                  </div>
                  <div></div>
                  <div>
                    <div className="nup">
                      <img src={NupImage} alt="nup" className="imgbg " />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-100 flex btm justify-center items-center">
                <div className="w-90 flex flex-row justify-between white">
                  <div className="flex flex-column">
                    <div
                      className="fw5 h-100 flex items-center pt3"
                      style={{ fontSize: "1.1vw" }}
                    >
                      copyright
                      <span className="red mt1">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "17px",
                          }}
                        >
                          <span className="pointer mt1 ml1 mr1">
                            <FaRegCopyright />
                          </span>
                        </IconContext.Provider>
                      </span>
                      2020-2022. All Rights Reserved.
                    </div>
                    <div className="mt1 mb2">
                      Coded by{" "}
                      <span className="pointer  ">
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.twitter.com/TonyJemba"
                        >
                          @TonyJemba
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <Space size="large">
                      <div className=" mt1 items-center flex justify-center">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "15px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
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
                            size: "15px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
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
                            size: "15px",
                            // className: "global-class-name",
                          }}
                        >
                          <div className="pointer  ">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.instagram.com/bobiwine"
                            >
                              <RiInstagramFill />
                            </a>
                          </div>
                        </IconContext.Provider>
                      </div>
                      <div className=" pp pointer">
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
export default connect(mapStateToProps)(LargeScreen);
