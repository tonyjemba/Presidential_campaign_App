import React from "react";
import "./css/homehero.css";
import Hero from "../lotties/Hero.jpg";

const PhoneScreen = () => {
  return (
    <div className=" w-100 height phone relative">
      <img src={Hero} alt="Hero " className="phone" />
      <div className="absolute w-100  phonetop flex justify-center pointer">
        <div className="w-90 flex flex-column" style={{ color: "#311B92" }}>
          <div className="w-75   fw7">
            <div className=" w-100 fs-normal " style={{ fontSize: "6vw" }}>
              CREATE A UGANDA
            </div>
            <div className=" w-100" style={{ fontSize: "6vw" }}>
              FOR EVERY CITIZEN
            </div>
          </div>
          <div
            className="Hbtn  mt3 flex redbg justify-center  hover-bg-dark-red items-center pt2 pb2 pointer"
            style={{ width: "26vw" }}>
            <div
              className="fw7"
              style={{ fontSize: "3.3vw", color: "#ffffff" }}>
              GET INVOLVED
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PhoneScreen;
