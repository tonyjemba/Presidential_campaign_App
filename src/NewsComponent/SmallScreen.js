import React from "react";
import { Layout, Divider, Row, Col, Select, Typography, List } from "antd";
import "./css/news.css";
import event from "../lotties/event.jpg";

const { Content, Sider } = Layout;
const { Option } = Select;
const { Paragraph } = Typography;

const NewsTemplate = ({ span }) => {

  return (
    <Col className="gutter-row" span={span}>
      <div className=" w-100  relative" style={{ height: "40vh" }}>
        <img src={event} alt="news" className="newsImage" />
        <div className="absolute bottom-0 w-100 nlay ">
          <div className="w-100 flex justify-center">
            <div className="w-90 ">
              <div className="white fw7 pt3 pointer" style={{ fontSize: "16px" }}>
                WATCH: Kyagulanyi Cheering Up People Power Supporters After Victory.
              </div>
              <div className="pointer pb1 " style={{ color: "#ff0000" }}>
                READ MORE
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
const NewsShortTemplate = ({ title }) => {
  return (
    <div>
      <div className="fw7 black" style={{ fontSize: "15px", cursor: "default" }}>
        {title}
      </div>
      <div>
        <Paragraph
          ellipsis={{ rows: 2, expandable: false }}
          style={{ color: "black", fontSize: "15px", cursor: "default" }}>
          Kibalama clarifies that Kyagulanyi is the president of the NUP political party
          Kibalama clarifies that Kyagulanyi is the president of the NUP political party
          Kibalama clarifies that Kyagulanyi is the president of the NUP political party
        </Paragraph>
      </div>
      <div className="pointer w-50" style={{ color: "#ff0000" }}>
        READ MORE
      </div>
    </div>
  );
};
const SmallScreen = () => {
  let data = [
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 0,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 1,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 2,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 3,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 4,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 2,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 3,
    },
    {
      title:
        "'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.",
      index: 4,
    },
  ];
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <Divider style={{ margin: 0 }} />
        <div className="flex justify-center mt4">
          <div
            className="w-90 bg-red"
            style={{ height: "50vh", objectFit: "cover", objectPosition: "center" }}>
            video
          </div>
        </div>
        <div className=" flex justify-between mt5" style={{ width: "95%" }}>
          <div className="w-34 ">
            <Divider orientation="right">LATEST POSTS</Divider>
          </div>
          <div className="w-30 ">
            <Divider orientation="left">NEWS</Divider>
          </div>
        </div>

        <div className="w-100 flex justify-center mt3">
          <div className="w-90 ">
            <Layout>
              <Content style={{ backgroundColor: "#ffffff" }}>
                <div className="" style={{ width: "98%" }}>
                  <Row gutter={[16, 34]}>
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                    <NewsTemplate span={24} />
                  </Row>
                </div>
              </Content>
              <Sider theme="light" width="32%" className="pl2">
                <div className="w-100 flex flex-column justify-between">
                  <div className="fw7" style={{ color: "#0C0474" }}>
                    ARCHIVES
                  </div>
                  <div>
                    <Select defaultValue="date" style={{ width: 150 }}>
                      <Option value="date">Order by Date</Option>
                      <Option value="mostViewed">Order by Most Viewed</Option>
                      <Option value="video">Order by Video</Option>
                      <Option value="disabled" disabled>
                        Order by Comments
                      </Option>
                    </Select>
                  </div>
                </div>
                <div className="mt4">
                  <List
                    pagination={{
                      showSizeChanger: true,
                      pageSize: 4,
                      pageSizeOptions: ["10", "30", "100"],
                    }}
                    dataSource={data}
                    renderItem={(val) => (
                      <List.Item>
                        <NewsShortTemplate title={val.title} />
                      </List.Item>
                    )}
                  />
                </div>
              </Sider>
            </Layout>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SmallScreen;
