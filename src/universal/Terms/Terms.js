import React from "react";
import { Typography, Skeleton, Modal } from "antd";

import { Link } from "react-router-dom";

const { Title } = Typography;

const ReachableContext = React.createContext();

const config = {
  title: "Looks like this is taking long?",
  okText: <Link to="/store">Report Issue</Link>,
  centered: true,
  content: (
    <>
      <ReachableContext.Consumer>
        {() =>
          `Try reloading the page if you are sure of your network.If it fails report Issue.`
        }
      </ReachableContext.Consumer>
    </>
  ),
};

const Terms = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Terms & Conditions
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            AGREEMENT
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center mt5 mb5">
        <div className="w-80">
          <ReachableContext.Provider>
            <div
              onClick={() => {
                modal.warning(config);
              }}>
              <Title
                level={3}
                style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
                Terms & Conditions
              </Title>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Title
                level={3}
                style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
                Privacy Policy
              </Title>
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </div>

            {contextHolder}
          </ReachableContext.Provider>
        </div>
        
      </div>
      <div  className="w-20 mt4 mb3" style={{ backgroundColor: "#f9f9f940"}}>
        <Link to="/Admin_Panel" className="w-100 " style={{ width:"100%", color: "#f9f9f940" }}>2021</Link>
      </div>
    </div>
  );
};
export default Terms;
