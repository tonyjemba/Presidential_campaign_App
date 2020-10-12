import React from "react";
import {
  Layout,
  Dropdown,
  Menu,
  Typography,
  List,
} from "antd";
import { DownOutlined} from "@ant-design/icons";
import camp from "../lotties/camp.jpg";
import { Input, Button } from "antd";
import {CgCalendarToday,CgViewMonth} from "react-icons/cg";
import {ImCalendar} from "react-icons/im";
import "./css/events.css";

const { Content } = Layout;
const { Title, Paragraph } = Typography;
const Template = ({ title }) => {
  return (
    <div>
      <Title level={4} style={{ cursor: "default", color: "#ff0000" }}>
        {title}
      </Title>
      <div className="flex flex-row" style={{ cursor: "default" }}>
        <div
          className="fw7 mr4"
          style={{ color: "#000080", fontSize: "2.2vw" }}>
          September 19, 2020
        </div>
        <div style={{ color: "#000080", fontSize: "2.2vw" }} className="fw7">
          Nakawa
        </div>
      </div>
      <div
        className="mt3"
        style={{
          color: "black",
          textAlign: "justify",
          textJustify: "inter-word",
        }}>
        <Paragraph
          ellipsis={{ rows: 3, expandable: true, symbol: "Show More" }}
          style={{ fontSize: "16px" }}>
          Operating systems are an essential part of any computer system.
          Similarly, a course on operating systems is an essential part of any
          computer science education. This field is undergoing rapid change, as
          computers are now prevalent in virtually every arena of day-to-day
          life— from embedded devices in automobiles through the most
          sophisticated planning tools for governments and multinational firms.
          Yet the fundamental concepts remain fairly clear, and it is on these
          that we base this book.course on operating systems is an essential
          part of any computer science education. This field is undergoing rapid
          change, as computers are now prevalent in virtually every arena of
          day-to-day life— from embedded devices in automobiles through the most
          sophisticated planning tools for governments and multinational firms.
          Yet the fundamental concepts remain fairly clear, and it is on these
          that we base this book
        </Paragraph>
      </div>
      {/* <Divider /> */}
    </div>
  );
};
const SmallScreen = () => {
  let data = [
    { title: "Election Day", index: 0 },
    { title: "Openning New Offices", index: 1 },
    { title: "Membership Fee", index: 2 },
    { title: "charity", index: 3 },
    { title: "General Cleaning", index: 4 },
    { title: "Membership Fee", index: 2 },
    { title: "charity", index: 3 },
    { title: "General Cleaning", index: 4 },
  ];
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<CgCalendarToday/>}>
        Order By Day
      </Menu.Item>
      <Menu.Item key="2" icon={<CgViewMonth />}>
        Order By Month
      </Menu.Item>
      <Menu.Item key="3" icon={<ImCalendar />}>
        Order By Year
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <div className="w-100">
          <div className="w-100 relative">
            <div
              className="w-100 flex justify-center absolute"
              style={{ top: "22%" }}>
              <div className="w-90">
                <div
                  className="fw7 "
                  style={{
                    width: "45%",
                    color: "#ffffff",
                    backgroundColor: " rgba(0, 0, 128, 0.082)",
                    fontSize: "6vw",
                  }}>
                  Events During <br /> the Struggle
                </div>
              </div>
            </div>
            <img
              src={camp}
              alt="event"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: "57vh",
                width: "100%",
              }}
            />
          </div>

          <div className="w-100 flex mt5 justify-center">
            <div className="w-90">
              <div
                className="w-100 flex flex-row justify-between mb5 pl3 pr3 pt1 pb2"
                style={{ backgroundColor: "#fbfbfb" }}>
                <div className="flex flex-column w-50">
                  <div className="fw7 black" style={{ fontSize: "2.5vw" }}>
                    Search
                  </div>
                  <div className="w-100 flex flex-row">
                    <div className="mr1">
                      <Input placeholder="Keyword" />
                    </div>
                    <Button type="primary">
                      <div className="white fw5">Find Event</div>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-column">
                  <div className="fw7 black" style={{ fontSize: "2.5vw" }}>
                    View As
                  </div>
                  <div>
                    <Dropdown overlay={menu}>
                      <Button>
                        <div className="black flex flex-row items-center ">
                          <div className="mr3">List</div>
                          <div>
                            <DownOutlined />
                          </div>
                        </div>
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>

              <div className="mb5">
                <List
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 3,
                    pageSizeOptions: ["10", "30", "100"],
                  }}
                  dataSource={data}
                  renderItem={(val) => (
                    <List.Item>
                      <Template title={val.title} />
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SmallScreen;
