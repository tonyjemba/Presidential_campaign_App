import React from "react";
import {Input } from "antd";



const VolunteerForm = ({size}) => {

  
  return (
    <div className=" w-100 ">
        <Input size={`${size}`} placeholder="Email" type="email" required/>
        <br/>
        <br/>
        <Input size={`${size}`} placeholder="Phone Number"/>
        <br/>
        <br/>
        <Input size={`${size}`} placeholder="zip Code"/>
        <div className="flex justify-center mt3">
            <div className="white  pointer white tc pt2 pb2 pl3 pr3 fw7 hover-bg-dark-red Hbtn" style={{backgroundColor:"#ff0000"}}>Submit</div>
        </div>

    </div>
  );
};
export default VolunteerForm;
