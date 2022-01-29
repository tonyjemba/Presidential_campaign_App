import React from "react";
import { Layout, Divider, Row, Col, Select, Typography, List,Spin,Skeleton} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import moment from "moment";
import { Link } from "react-router-dom";
import "./css/news.css";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded,isEmpty  } from 'react-redux-firebase';
const { Content, Sider } = Layout;
const { Option } = Select;
const { Paragraph } = Typography;

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />

const NewsTemplate = ({ span,title,photo,id,date }) => {

  return(
    <Col className="gutter-row" span={span}>
      <div className=" w-100  relative" style={{ height: "45vh" }}>
        <img src={photo} alt="news" className="newsImage" />
        <div className="absolute bottom-0 w-100 nlay ">
          <div className="w-100 flex justify-center">
            <div className="w-90 ">
              <div className="white w-100 fw7 pt3 pointer" >
                       <Paragraph
          ellipsis={{ rows: 2, expandable: false }}
          style={{ color: "white", fontSize: "16px", cursor: "default" }}>
         {title}
        </Paragraph>
              </div>
              <div className="w-100 flex flex-row justify-between">
                <div>
                  <Link to={"/thenews/" + id} className="pointer pb1 " style={{ color: "#ff0000" }}>
                READ MORE
              </Link>
                </div>
                <div style={{ color: "#ff0000",fontSize: "16px" ,pointer:"default"}} className=" pb1 ">{moment(date.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
const NewsShortTemplate = ({ title,detail ,id}) => {
  return (
    <div>
      <div className="fw7 black" style={{ fontSize: "16px", cursor: "default" }}>
        {title}
      </div>
      <div>
        <Paragraph
          ellipsis={{ rows: 2, expandable: false }}
          style={{ color: "black", fontSize: "16px", cursor: "default" }}>
         {detail}
        </Paragraph>
      </div>
      <Link  to={"/thenews/" + id} className="pointer w-50" style={{ color: "#ff0000" }}>
        READ MORE
      </Link>
    </div>
  );
};
const SmallScreen = () => {
    useFirestoreConnect([
      { collection: 'news', orderBy: ["Date", "desc"] },
      { collection: 'images'}
  ])
  const news = useSelector((state) => state.firestore.ordered.news);
    const latest = news && news.slice(0,8);
  const rest = news && news.slice(8, news.length);
  const hero = useSelector((state) => state.firestore.ordered.images);
  
  // const videoImage = hero && hero[1].imageUrl;
  const youtubeID = hero && hero[1].youtubeID;

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <Divider style={{ margin: 0 }} />
        <div className="flex justify-center mt4">
         
          <div
            className="w-90 "
            style={{
              height: "70vh",
              objectFit: "cover",
              objectPosition: "center",
              backgroundColor: "#E5E5E5",
            }}
          >
            <iframe
              className="video"
              width="100%"
              height="100%"
              loading="lazy"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer;
                           encrypted-media;
                           gyroscope;
                           picture-in-picture"
              src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
            ></iframe>
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
                {!isLoaded(latest) ? (
                  <div className="w-100 pt5 pb5 flex justify-center items-center">
                    <div>
                      <Spin indicator={antIcon} />
                    </div>
                  </div>
                ) : isEmpty(latest) ? (
                  <div className="w-100 pt5 pb5 flex justify-center items-center">
                    <div>
                      <Spin indicator={antIcon} />
                    </div>
                  </div>
                ) : (
                  <div className="" style={{ width: "98%" }}>
                    <Row gutter={[16, 34]}>
                      {latest &&
                        latest.map((news) => (
                          <NewsTemplate
                            key={news.id}
                            id={news.id}
                            date={news.Date}
                            span={24}
                            title={news.Title}
                            photo={news.photoUrl}
                          />
                        ))}
                    </Row>
                  </div>
                )}
              </Content>
              <Sider theme="light" width="32%" className="pl2">
                <div className="w-100 flex flex-column">
                  <div className="fw7 mb3" style={{ color: "#0C0474" }}>
                    ARCHIVES
                  </div>
                  <div>
                    <Select defaultValue="date" style={{ width: 140 }}>
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
                  {!isLoaded(rest) ? (
                    <div className="mb4">
                      <Skeleton active />
                      <Divider />
                      <Skeleton active />
                      <Divider />
                      <Skeleton active />
                    </div>
                  ) : isEmpty(rest) ? (
                    <div className="mb4">
                      <Skeleton active />
                      <Divider />
                      <Skeleton active />
                      <Divider />
                      <Skeleton active />
                    </div>
                  ) : (
                    <List
                      pagination={{
                        showSizeChanger: true,
                        pageSize: 6,
                        pageSizeOptions: ["10", "30", "100"],
                      }}
                      dataSource={rest}
                      renderItem={(val) => (
                        <List.Item>
                          <NewsShortTemplate
                            title={val.Title}
                            id={val.id}
                            detail={val.Detail}
                          />
                        </List.Item>
                      )}
                    />
                  )}
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


