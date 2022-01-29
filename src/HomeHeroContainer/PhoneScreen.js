import React from "react";
import { Link } from "react-router-dom";
import "./css/homehero.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Typography } from "antd";

const { Title } = Typography;


const PhoneScreen = ({ HomeContent }) => {
  const image = HomeContent && HomeContent[0].imageUrl;
  const text = HomeContent && HomeContent[0].Hero_Slogan;
  return (
    <div className=" w-100 height phone relative">
      <img src={image} alt="Hero " className="phone" />
      <div className="absolute w-100  phonetop flex justify-center pointer">
        <div className="w-90 flex flex-column" style={{ color: "#311B92" }}>
          <div className="w-70   fw7">
            <Title
              level={2}
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
              style={{ width: "26vw" }}
            >
              <div
                className="fw7"
                style={{ fontSize: "3.3vw", color: "#ffffff" }}
              >
                GET INVOLVED
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default compose(
  firestoreConnect(() => [{ collection: "HomeContent" }]),
  connect((state, props) => ({
    HomeContent: state.firestore.ordered.HomeContent,
  }))
)(PhoneScreen);
