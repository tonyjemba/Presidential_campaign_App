import React from "react";
import { Link } from "react-router-dom";
import "./css/homehero.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Typography } from "antd";

const { Title } = Typography;
const SmallScreen = ({ HomeContent }) => {
    const image = HomeContent && HomeContent[0].imageUrl;
    const text = HomeContent && HomeContent[0].Hero_Slogan;
  return (
    <div className=" w-100 height small relative">
      <img src={image} alt="Hero " className="small" />
      <div className="absolute w-100  pos flex justify-center pointer">
        <div className="w-90 flex flex-column" style={{ color: "#311B92" }}>
          <div className="w-60   fw7">
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
              style={{ width: "20vw" }}
            >
              <div
                className="fw7"
                style={{ fontSize: "2vw", color: "#ffffff" }}
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
)(SmallScreen);
