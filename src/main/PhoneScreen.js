import React from "react";
import { Layout } from "antd";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import HeaderComponent from "../universal/HeaderComponent/HeaderComponent";

const { Footer, Content } = Layout;

const MediumScreen = () => {
  return (
    <div>
      <div>
        <HeaderComponent />
      </div>
      <Layout>
        <Layout>
          <Content>
            <HomeHeroContainer />
          </Content>
        </Layout>
        <Layout >
          <Content >
            <div className="vh-75 ">other content here</div>
          </Content>
        </Layout>
        <Layout >
          <Footer>
            <div className="bg-green vh-75">tihs is the </div>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
export default MediumScreen;
