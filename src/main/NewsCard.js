import React from "react";
import { Link } from "react-router-dom";
import { Col,Typography } from "antd";
const { Paragraph } = Typography;
 const NewsCard = ({ span, id, date, fontSize, image, title, author }) => {
   return (
     <Col className="gutter-row" span={span}>
       <div style={{ background: "#fbfbfb" }}>
         <Link to={"/thenews/" + id}>
           <div
             className="w-100 pointer"
             style={{ height: "35vh", background: "#fbfbfb" }}
           >
             <img
               src={image}
               alt="news"
               style={{
                 objectFit: "cover",
                 objectPosition: "center",
                 height: "100%",
                 width: "100%",
               }}
             />
           </div>
         </Link>
         <div className="w-100 mt2 mb2  fw5">
           <Link to={"/thenews/" + id}>
             <div
               style={{ color: "#ff0000", fontSize: `${fontSize}` }}
               className="pointer pl2"
             >
               {date}
             </div>
           </Link>
         </div>
         <Link to={"/thenews/" + id}>
           <div className="fw7 pl2">
             <Paragraph
               ellipsis={{ rows: 2, expandable: false }}
               style={{ color: "black", fontSize: `${fontSize}` }}
             >
               {title}
             </Paragraph>
           </div>
         </Link>
         <div
           className="fw4 pl2"
           style={{ fontSize: `${fontSize}`,fontWeight:"lighter", cursor: "default" }}
         >
           {" "}
           Author: {author}
         </div>
       </div>
     </Col>
   );
};
 
export default NewsCard;

