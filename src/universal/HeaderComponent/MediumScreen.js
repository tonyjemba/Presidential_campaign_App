import React, { useState, useEffect } from "react";
import "./css/headercomponent.css";
import { Space, Badge } from "antd";
import Sticky from "react-sticky-el";
import { MdEmail, MdLiveTv } from "react-icons/md";
import { Link} from "react-router-dom";
import { GrMapLocation, GrFacebook, GrTwitter } from "react-icons/gr";
import { RiInstagramFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { IconContext } from "react-icons";
import real from "../../lotties/real.png";
const MediumScreen = () =>{
  const [headerBg, setheaderBg] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setheaderBg("bg-white");
      } else {
        setheaderBg("");
      }
    });
  });
   return (
     <div className="bckgrnd ">
       <div
         className=" flex-column items-center flex w-100  "
         style={{ backgroundColor: `${headerBg}` }}
       >
         <div className="w-100  tosection flex justify-center">
           <div className="flex flex-row innercontwidth   justify-between">
             <div className="w-75 flex  justify-between">
               <Space size="large">
                 <div className="items-center flex flex-row">
                   <Space>
                     <div className=" mt1 items-center flex justify-center">
                       <IconContext.Provider
                         value={{
                           color: "black",
                           size: "17px",
                         }}
                       >
                         <div className="pointer  ">
                           <MdEmail />
                         </div>
                       </IconContext.Provider>
                     </div>
                     <div>info@nupuganda.org</div>
                   </Space>
                 </div>
                 <div>
                   <Space>
                     <div className=" mt1 items-center flex justify-center">
                       <IconContext.Provider
                         value={{
                           color: "black",
                           size: "17px",
                         }}
                       >
                         <div className="pointer  ">
                           <GrMapLocation />
                         </div>
                       </IconContext.Provider>
                     </div>
                     <div>Plot 1622/ 1623 Kira Road K'la</div>
                   </Space>
                 </div>
               </Space>
             </div>
             <div className=" w-25 flex justify-end">
               <Space size="middle">
                 <div>Follow us : </div>
                 <div className=" mt1 items-center flex justify-center">
                   <IconContext.Provider
                     value={{
                       color: "black",
                       size: "17px",
                     }}
                   >
                     <a
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.facebook.com/www.bobiwine.ug/"
                     >
                       <div className="pointer  ">
                         <GrFacebook />
                       </div>
                     </a>
                   </IconContext.Provider>
                 </div>
                 <div className=" mt1 items-center flex justify-center">
                   <IconContext.Provider
                     value={{
                       color: "black",
                       size: "17px",
                     }}
                   >
                     <a
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.twitter.com/HEBobiwine"
                     >
                       <div className="pointer  ">
                         <GrTwitter />
                       </div>
                     </a>
                   </IconContext.Provider>
                 </div>
                 <div className=" mt1 items-center flex justify-center">
                   <IconContext.Provider
                     value={{
                       color: "black",
                       size: "17px",
                     }}
                   >
                     <a
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://www.instagram.com/bobiwine"
                     >
                       <div className="pointer  ">
                         <RiInstagramFill />
                       </div>
                     </a>
                   </IconContext.Provider>
                 </div>
               </Space>
             </div>
           </div>
         </div>
         <div className="w-100 sticky">
           <Sticky topOffset={500} stickyClassName={`${headerBg} `}>
             <div className=" flex items-center justify-center w-100">
               <div className="innercontwidth  flex flex-row justify-between mt2 mb3 ">
                 <div className="w-75  flex flex-row  justify-between ">
                   <Link to="/">
                     <div className="mr2 pointer logo ">
                       <img src={real} alt="logo" height={30} />
                     </div>
                   </Link>
                   <Space size="large">
                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       {" "}
                       <Link to="/">HOME</Link>
                     </div>

                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       <Link to="/events">EVENTS</Link>
                     </div>
                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       <Link to="/news">NEWS</Link>
                     </div>
                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       <Link to="/videos">VIDEOS</Link>
                     </div>
                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       <Link to="/about">ABOUT</Link>
                     </div>
                     <div
                       className="pointer fw7"
                       style={{ color: "#311B92", fontSize: "1.5vw" }}
                     >
                       <Link to="/contact">CONTACT</Link>
                     </div>
                     <a
                       target="_blank"
                       rel="noopener noreferrer"
                       href="https://kyagulanyi2021stores.bigcartel.com/"
                     >
                       <div
                         className="pointer fw7"
                         style={{ color: "#311B92", fontSize: "1.5vw" }}
                         style={{ color: "#311B92" }}
                       >
                         STORE
                       </div>
                     </a>
                   </Space>
                 </div>
                 <div className="w-25 flex    justify-end">
                   <Space size="large">
                     <div>
                       <Link to="live">
                         <IconContext.Provider
                           value={{
                             color: "black",
                             size: "20px",
                           }}
                         >
                           <MdLiveTv />
                         </IconContext.Provider>
                       </Link>
                     </div>
                     <div>
                       <Badge showZero={true} offset={[4, 3]} count={0}>
                         <div className=" mt1 items-center flex justify-center">
                           <IconContext.Provider
                             value={{
                               color: "black",
                               size: "19px",
                             }}
                           >
                             <div className="pointer  ">
                               <a
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 href="https://kyagulanyi2021stores.bigcartel.com/"
                               >
                                 <IoMdCart />
                               </a>
                             </div>
                           </IconContext.Provider>
                         </div>
                       </Badge>
                     </div>
                     <div className="tosection hover-bg-dark-red pointer pa2 pl3 pr3 Hbtn">
                       <a
                         target="_blank"
                         rel="noopener noreferrer"
                         href="https://peoplepower.org.ug/donate/"
                       >
                         <div
                           className="pointer fw7"
                           style={{ color: "#311B92" }}
                         >
                           DONATE
                         </div>
                       </a>
                     </div>
                   </Space>
                 </div>
               </div>
             </div>
           </Sticky>
         </div>
       </div>
     </div>
   );};
export default MediumScreen;
