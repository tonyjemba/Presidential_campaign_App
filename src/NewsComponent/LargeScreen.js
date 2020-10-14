import React from "react";
import {Layout ,Divider,Row,Col,Select,Typography} from "antd";
import "./css/news.css";
import event from "../lotties/event.jpg";


const {Content,Sider} = Layout;
const {Option} = Select;
const {Paragraph} = Typography;

const NewsTemplate = ({span}) => {
    return(
        <Col className="gutter-row" span={span} >
        <div className=" w-100  relative" style={{height:"40vh"}}>
                    <img src={event} alt="news" className="newsImage"/>
                    <div className="absolute bottom-0 w-100 nlay ">
                        <div className="w-100 flex justify-center">
                            <div className="w-90 ">
                                <div className="white fw7 pt3 pointer" style={{fontSize:"16px"}}>WATCH: Kyagulanyi Cheering Up People Power Supporters After Victory.</div>
                                <div className="pointer pb1 " style={{color:"#ff0000"}}>READ MORE</div>
                            </div>
                        </div>
                    </div>
        </div>
        </Col>
    )
}
const LargeScreen = () => {
    return(
        <Layout style={{backgroundColor:"#ffffff"}}>
            <Content>
                <Divider style={{margin:0}}/>
                <div className="flex justify-center mt4">
                    <div className="w-60 bg-red" style={{height:"70vh",objectFit:"cover",objectPosition:"center"}}>video</div>
                </div>
                <div className=" flex justify-between mt5" style={{width:"95%"}}>
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
                        <Content style={{backgroundColor:"#ffffff"}}> 
                        <div className="" style={{width:"98%"}}>
                        <Row gutter={[16, 34]}>
                        <NewsTemplate span={12}/>
                        <NewsTemplate span={12}/>
                        <NewsTemplate span={12}/>
                        <NewsTemplate span={12}/>
                        <NewsTemplate span={12}/>
                        <NewsTemplate span={12}/>
                        </Row>
                        </div>
                        </Content>
                        <Sider theme="light" width="32%" className="pl2">
                            <div className="w-100 flex flex-row justify-between">
                                <div className="fw7" style={{color:"#0C0474"}}>ARCHIVES</div>
                                <div>
                                <Select defaultValue="date" style={{ width: 200 }} >
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
                                <div>
                                    <div className="fw7 black" style={{fontSize:"16px"}}>'I have never demanded Kyagulanyi any money'...Kibalama Asserts as court countinues to find the truth.</div>
                                    <div><Paragraph>
                                        Kibalama clarifies that Kyagulanyi is the president of the NUP political party
                                        </Paragraph></div>
                                        <div className="pointer w-50" style={{color:"#ff0000"}}>READ MORE</div>
                                </div>
                            </div>
                        </Sider>
                    </Layout>
                    </div>
                </div>
            </Content>
        </Layout>
    )
}

export default LargeScreen;