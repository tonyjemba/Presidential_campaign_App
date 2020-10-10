import React from "react";
import { Layout, Typography } from "antd";
import { BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { IconContext } from "react-icons";
import event from "../../lotties/event.jpg";

const { Content } = Layout;
const { Paragraph } = Typography;
const LargeScreen = () => {
  return (
    <div className="flex flex-column w-50">
      <div className="w-100 pointer">
        <img src={event} alt="event" className="eimg" />
      </div>
      <Layout className="w-100" style={{ backgroundColor: "#ffffff" }}>
        <Content
          className="flex flex-row justify-between"
          style={{ backgroundColor: "#ffffff" }}>
          <div className=" mt1 tc white fw7 w-20 pa0">
            <div
              style={{
                fontSize: "1.5vw",
                backgroundColor: "#ff0000",
                cursor: "default",
              }}>
              31 <br /> SEPT
            </div>
          </div>
          <div className=" mt1 w-75 pointer">
            <Paragraph
              ellipsis={{ rows: 2, expandable: false }}
              style={{
                color: "#000000",
                textAlign: "justify",
                textJustify: "inter-word",
                margin: "0px",
              }}
              className="fw7">
              Today Our Campaign Is Here Today Our Campaign Is Here Today Our
              Campaign Is Here Today Our{" "}
            </Paragraph>
            <div className="w-100 flex flex-row justify-between items-center">
              <div className=" flex flex-row  items-center  ">
                <div className="mr1">
                  <IconContext.Provider
                    value={{
                      color: "rgba(0,0,0,0.5)",
                      // size: "1.1vw",
                    }}>
                    <div className="pointer  mr1">
                      <BsFillClockFill />
                    </div>
                  </IconContext.Provider>
                </div>
                <div
                  className="fw4 pointer"
                  style={{ verticalAlign: "middle" }}>
                  8 : 00
                </div>
              </div>
              <div className=" flex flex-row  items-center content-end">
                <div className="mr1">
                  <IconContext.Provider
                    value={{
                      color: "rgba(0,0,0,0.5)",
                      // size: "1.3vw",
                    }}>
                    <div className="pointer  mr1 mt1 ">
                      <MdLocationOn />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="fw4 pointer" style={{}}>
                  Kamwokya
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
      <div>
        <Paragraph
          ellipsis={{ rows: 2, expandable: false }}
          style={{
            color: "#000000",
            textAlign: "justify",
            textJustify: "inter-word",
            margin: "0px",
          }}>
          Today Our Campaign Is Here Today Our Campaign Is Here Today Our
          Campaign Is Here Today Our Our Campaign Is Here Today Our Campaign Is
          Here Today Our{" "}
        </Paragraph>
      </div>
    </div>
  );
};
export default LargeScreen;
