import React from "react";
import "./css/footercomponent.css";
import { FaRegCopyright } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import peoplepower from "../../lotties/peoplepower.png";
import { useSelector } from "react-redux";
import { useFirestoreConnect, } from "react-redux-firebase";

const { Content } = Layout;
const mapStateToProps = (state) => {
  return {
    currentUser: state.Admin.currentUser,
  };
};
const PhoneScreen = ({currentUser}) => {
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
              <div className="w-90 flex flex-column justify-between">
                <div className=" w-100 mt4 mb4">
                  <div className="fw7 " style={{ fontSize: "4.5vw" }}>
                    Make Kyagulanyi win this struggle by signing in to volunteer
                    Today.
                    <br /> Lets do this together!
                  </div>
                  <div style={{ fontSize: "12px" }}>
                    Thank you for joining our campaign to elect Kyagulanyi. By
                    providing your details you consent to recieve recurring text
                    messages from Kyagulanyi for president 2021.
                    <Link to="/volunteer" style={{ color: "#ffffff" }}>
                      click here
                    </Link>{" "}
                    to opt out.{" "}
                    <span className="fw5">
                      Terms and Conditions and Privacy policy
                    </span>
                  </div>
                </div>
                <div className="w-100 mt3 mb4">
                  {currentUser ? (
                    <div className="w-100 tc  ">
                      <div
                        style={{
                          fontWeight: "lighter",
                          color: "#ffffff",
                          fontSize: "16px",
                        }}
                      >
                        Welcome back {currentUser.name}!
                      </div>
                      <div
                        style={{
                          fontWeight: "lighter",
                          color: "#ffffff",
                          fontSize: "16px",
                        }}
                      >
                        Thank You For Supporting Kyagulanyi.
                      </div>
                    </div>
                  ) : (
                    <div className="">
                      <Link to="/volunteer">
                        <div className="w-100 flex justify-center">
                          <div
                            className="w-50 Hbtn pointer tc mb4 white fw7 pt2 pb2 pl2 pr2 hover-bg-dark-red"
                            style={{
                              backgroundColor: "#FF0000",
                              fontSize: "14px",
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
          </div>

          <div className="fh vh-75 w-100 relative">
            <img src={backgroundImage} alt="flag" className="imgbg" />
            <div className="absolute   w-100 h-100 overlay flex flex-column justify-between">
              <div className=" w-100 flex justify-center">
                <div className="w-90   white">
                  <div className="w-100">
                    <div className="mt4  fw7" style={{ fontSize: "18px" }}>
                      About
                    </div>
                    <div className="mt3 " style={{ fontSize: "16px" }}>
                      This website is designed,coded and paid for by supporters.
                      <br />
                      Made with Love for a better Uganda.
                      <br />
                      Kyagulanyi For President.
                    </div>
                    <div className="mt2 f5">
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
                    <div className="nupsm">
                      <img src={NupImage} alt="nup" className="imgbg " />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-100 flex btm justify-center items-center">
                <div className="w-90 flex flex-row justify-between white">
                  <div className="flex flex-column">
                    <div
                      className="fw5 h-100 flex items-center  "
                      style={{ fontSize: "10px", marginTop: "6%" }}
                    >
                      copyright
                      <span className="red mt1">
                        <IconContext.Provider
                          value={{
                            color: "white",
                            size: "10px",
                          }}
                        >
                          <span className="pointer mt1 ml1 mr1 ">
                            <FaRegCopyright />
                          </span>
                        </IconContext.Provider>
                      </span>
                      2020-2022. All Rights Reserved.
                    </div>
                    <div className="mt1 mb2">
                      Coded by{" "}
                      <span className="pointer  " sytle={{ fontSize: "10px" }}>
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

                  <div className=" mt2  ppp pointer">
                    <img
                      src={peoplepower}
                      alt="peoplepower"
                      className="imgbg"
                    />
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
export default connect(mapStateToProps)(PhoneScreen);

