import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import Sticky from "react-sticky-el";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";

const { Footer, Content } = Layout;

const PhoneScreen = () => {
  const [headerBg, setheaderBg] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setheaderBg("red");
      } else {
        setheaderBg("");
      }
    });
  });
  return (
    <Layout>
      <Content>
        <Sticky topOffset={300}>
          <div className="absolute  items-center justify-center flex w-100 " style={{backgroundColor:`${headerBg}`}}>
            <div className="flex flex-column w-90  bg-yellow ">
              <div className="flex flex-row justify-between">
                <div className="w-50 bg-green flex  justify-between">
                  <div>call us +25678349565</div>
                  <div>jemy2021@gmail.com</div>
                  <div>18th street wampewo</div>
                </div>
                <div className=" w-20 bg-green flex  justify-between">
                  <div>Follow us</div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt2 mb2">
                <div className="w-50 bg-purple">logo & tabs</div>
                <div className="w-20 bg-purple">icons</div>
              </div>
            </div>
          </div>
        </Sticky>
        <HomeHeroContainer />
      </Content>
      <Content>
        <div className="vh-75 bg-blue">other content here</div>
      </Content>
      <Footer>
        <div className="bg-green">tihs is the </div>
      </Footer>
    </Layout>
  );
};
export default PhoneScreen;
