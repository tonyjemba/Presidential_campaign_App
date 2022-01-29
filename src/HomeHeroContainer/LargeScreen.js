import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/homehero.css";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect,isLoaded } from "react-redux-firebase";
import { Typography } from "antd";


const { Title } = Typography;
const LargeScreen = ({HomeContent}) => {
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
    <div className=" transparent ">
      <section className="">
        <div className="">
         
            {isLoaded(image)?<img src={image} alt={text} />:<div className="w-100 vh-50" style={{backgroundColor:"#ffffff"}}><div style={{color:"#ffffff"}}>Kyagulanyi4President</div></div>}
       
        </div>
        <div className="w-100 flex justify-center cont">
          <div className="w-90 " style={{ color: "#311B92" }}>
            <div className="w-30   fw7">
              <Title
                level={1}
                style={{
                  color: "#0C0474",
                  fontWeight: "bolder",
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
                  width: "12.5vw",
                }}
              >
                <div
                  className="fw7"
                  style={{ fontSize: "1.35vw", color: "#ffffff" }}
                >
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
)(LargeScreen);
