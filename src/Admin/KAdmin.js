import React from 'react'
import {
  Typography,
  Layout,
  Tabs,
} from 'antd'
import AddEvent from "./AddEvent";
import Others from "./Other";
import AddNews from "./AddNews";
import NewsVideo from "./NewsVideo";
import Home from "./Home";

const { Title } = Typography
const { Content } = Layout
const { TabPane } = Tabs

const KAdmin = () => {
 
  return (
    <div>
      <div
        className="w-100 flex justify-center"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}
          >
            Admin Panel
          </Title>
          <div
            className="pointer"
            style={{ color: "#0C0474", cursor: "default" }}
          >
            Add new Events and News
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-90">
          <Layout style={{ backgroundColor: "#ffffff" }}>
            <Content style={{ backgroundColor: "#ffffff" }}>
              <div className="mt5 mb5 w-100 ">
                <Tabs defaultActiveKey="1" type="card">
                  <TabPane tab="Home" key="1">
                    <Home />
                  </TabPane>
                  <TabPane tab="Add Event" key="2">
                    <AddEvent />
                  </TabPane>
                  <TabPane tab="Add News" key="3">
                    <AddNews />
                  </TabPane>
                  <TabPane tab="NewsVideo" key="4">
                    <NewsVideo />
                  </TabPane>
                  <TabPane tab="eventHero" key="5">
                    <Others />
                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
}

export default KAdmin;
