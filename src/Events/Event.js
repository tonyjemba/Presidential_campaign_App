import React from "react";
import { Layout,Typography } from "antd";


const { Content } = Layout;
const { Title } = Typography;

const Event = () => {
    return(
        <div className="w-100 flex justify-center">
            <div className="w-90">
                <Layout style={{backgroundColor:"#ffffff"}}>
                    <Content style={{backgroundColor:"#ffffff"}}>
                        <div className="mt4">
                                <div className="pointer w-30">Back To Events</div>
                        </div>
                        <div className="mt4">
                            <div className="w-100 flex justify-center">
                                <div className="w-80 bg-pink" style={{height:"200px"}}>photo</div>
                            </div>
                            <div className="mt4"><Title level="4">Title</Title></div>
                            <div className="mt4" style={{fontSize:"16px"}}>Content</div>
                        </div>
                    </Content>
             </Layout>
            </div>
        </div>
    )
}

export default Event;