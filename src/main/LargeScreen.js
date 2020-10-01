import React from "react";
import { Layout } from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";

const { Footer, Content } = Layout;

const LargeScreen = () => {
  return (
    <div>
          <Layout>
      <Content>
      <HomeHeroContainer />
      </Content>
      <Content className="bg-white">
        <div className="vh-75 ">other content here</div>
      </Content>
      <Footer>
        <div className="bg-green">tihs is the </div>
      </Footer>
    </Layout>
    </div>
  );
};
export default LargeScreen;
