import React from "react";
import "./css/homehero.css";
import Hero from "../lotties/Hero.jpg";

const SmallScreen = () => {
  return (
    <div className=" w-100 height small relative">
      <img src={Hero} alt="Hero " className="small" />
      <div className="absolute w-100  pos flex justify-center pointer">
        <div className="w-90 flex flex-column" style={{ color: "#311B92" }}>
          <div className="w-75   fw7">
            <div className=" w-100 fs-normal " style={{ fontSize: "5vw" }}>
              CREATE A UGANDA
            </div>
            <div className=" w-100" style={{ fontSize: "5vw" }}>
              FOR EVERY CITIZEN
            </div>
          </div>
          <div
            className="Hbtn  mt3 flex redbg justify-center  hover-bg-dark-red items-center pt2 pb2 pointer"
            style={{ width: "20vw" }}>
            <div
              className="fw7"
              style={{ fontSize: "2vw", color: "#ffffff" }}>
              GET INVOLVED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SmallScreen;
