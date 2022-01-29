import React from "react";
import { Link } from "react-router-dom";
import {  Typography} from "antd";
const { Title, Paragraph } = Typography;

const TemplateLarge = ({ title, date, location, detail, id }) => {
  return (
    <div>
      <Title level={4} style={{ cursor: "default", color: "#ff0000" }}>
        {title}
      </Title>
      <div className="flex flex-row" style={{ cursor: "default" }}>
        <div
          className="fw7 mr6"
          style={{ color: "#000080", fontSize: "1.5vw" }}
        >
          {date}
        </div>
        <div style={{ color: "#000080", fontSize: "1.5vw" }} className="fw7">
          {location}
        </div>
      </div>
      <div
        className="mt3"
        style={{
          color: "black",
          textAlign: "justify",
          textJustify: "inter-word",
        }}
      >
        <Paragraph
          ellipsis={{ rows: 3, expandable: false }}
          style={{ fontSize: "16px" }}
        >
          {detail}
        </Paragraph>
      </div>
      <div className="w-100 flex justify-end">
        <div>
          <Link to={"/event/" + id}>Show More</Link>
        </div>
      </div>
    </div>
  );
};
export default TemplateLarge;
