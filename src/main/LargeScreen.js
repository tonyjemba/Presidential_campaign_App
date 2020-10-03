import React from "react";
import { Layout } from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import HeaderComponent from "../universal/HeaderComponent/HeaderComponent";

const { Footer, Content } = Layout;

const LargeScreen = () => {
  return (
    <div className="relative">
            <div className="top1">
            <HeaderComponent />
            </div>
      <Layout className="bg">

        <Layout>
          <Content className="transparent wh">
            <HomeHeroContainer />
          </Content>
        </Layout>
        <Layout className="top">
          <Content className="bg-white">
            <div className="vh-75 ">other content here</div>
          </Content>
        </Layout>
        <Layout className="top">
          <Footer>
            <div className="bg-green vh-75">tihs is the </div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default LargeScreen;
