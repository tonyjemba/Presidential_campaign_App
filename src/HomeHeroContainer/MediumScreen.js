import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/homehero.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Typography } from "antd";

const { Title } = Typography;

const MediumScreen = ({HomeContent}) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const image= HomeContent && HomeContent[0].imageUrl;
    const text = HomeContent && HomeContent[0].Hero_Slogan;
  return (
    <div className="bacground transparent ">
      <section className="hero">
        <div className="image">
          <img
            src={image}
            alt="Hero"
            className="parallax"
          />
        </div>
        <div className="w-100 flex justify-center contm">
          <div className="innercontwidth " style={{ color: "#311B92" }}>
            <div className="w-40">
              <Title
                level={1}
                style={{
                  color: "#0C0474",
                  fontWeight: "bold",
                }}
              >
                {text}
              </Title>
            </div>
            <Link to="/getInvolved">
                        <div
              
              className="Hbtn  mt3 flex redbg justify-center  hover-bg-dark-red items-center pt2 pb2 pointer"
              style={{
                transform: `translateY(${offset * 0.09}px)`,
                width: "12vw"
              }}
              >
              <div
                className="fw7"
                style={{ fontSize: "1.3vw", color: "#ffffff" }}>
                GET INVOLVED
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default compose(
  firestoreConnect(() => [
    { collection: "HomeContent" },
  ]),
  connect((state, props) => ({
    HomeContent: state.firestore.ordered.HomeContent,
  }))
)(MediumScreen);
