import React from 'react'
import {
  Typography,
  Layout,
  Tabs,
  Button
} from 'antd'
import AddEvent from "./AddEvent";
import Others from "./Other";
import AddNews from "./AddNews";
import NewsVideo from "./NewsVideo";
import LiveVideo from "./LiveVideo";
import Home from "./Home";
import Videos from "./Videos";
import Messages from "./Messages";
import Stories from "./Stories";
import Involved from "./Involved";
import { useAuth0 } from "@auth0/auth0-react";


const { Title } = Typography
const { Content } = Layout
const { TabPane } = Tabs

const KAdmin = () => {

  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <div
            className="w-100 flex justify-center"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            <div className="w-90 mb4 mt4 fw7">
              <Title
                level={3}
                style={{
                  color: "#0C0474",
                  fontWeight: "700",
                  cursor: "default",
                }}
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
              <div className="w-100 flex justify-end mt3 mb5">
                <div>
                  <Button type="primary" onClick={() => logout()}>
                    Logout
                  </Button>
                </div>
              </div>
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
                      <TabPane tab="LiveVideo" key="5">
                        <LiveVideo />
                      </TabPane>
                      <TabPane tab="eventHero" key="6">
                        <Others />
                      </TabPane>
                      <TabPane tab="Videos" key="7">
                        <Videos />
                      </TabPane>
                      <TabPane tab="Messages" key="8">
                        <Messages />
                      </TabPane>
                      <TabPane tab="Stories" key="9">
                        <Stories />
                      </TabPane>
                      <TabPane tab="Involved" key="10">
                        <Involved />
                      </TabPane>
                    </Tabs>
                  </div>
                </Content>
              </Layout>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt6 mb6 w-100 flex justify-center items-center">
          <div>
            <Button type="primary" onClick={() => loginWithRedirect()}>
              Log in
            </Button>
          </div>
        </div>
      )}
    </div>
  );
 
  
}

export default KAdmin;
