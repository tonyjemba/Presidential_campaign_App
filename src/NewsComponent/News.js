import React, { useEffect } from 'react';
import { Layout, Typography } from 'antd';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import Media from 'react-media';
import { smaller } from '../universal/ScreenSize';
const { Content } = Layout
const { Title } = Typography

const News = ({ news }) => {
  const id = { ...useParams() }
  const newsArray = news.filter((e) => e.id === id.id)
  const theNews = { ...newsArray[0] }

  useEffect(() => {
    //listen refresh event
    onbeforeunload = (e) => 'Goback'
    return function cleanup() {
      onbeforeunload = null
    }
  })
  return (
    <div className="w-100">
      <Media queries={{ smaller: smaller }}>
        {(matches) =>
          matches.smaller ? (
            <div className="w-100 flex justify-center">
              <div className="w-90">
                <Layout style={{ backgroundColor: "#ffffff" }}>
                  <Content style={{ backgroundColor: "#ffffff" }}>
                    <div className="mt4">
                      <Link
                        to="/news"
                        className="pointer w-30"
                        style={{ fontSize: "17px" }}
                      >
                        Back To News
                      </Link>
                    </div>
                    <div className="mt4">
                      <div className="w-100 flex justify-center">
                        <div className="w-100">
                          <img
                            src={theNews.photoUrl}
                            alt="News_Photo"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              height: "35vh",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="mt4">
                        <Title style={{ fontWeight: "bold" }} level={3}>
                          {theNews.Title}
                        </Title>
                      </div>
                      <div
                        className="flex flex-row"
                        style={{ cursor: "default" }}
                      >
                        <div className="fw5 mr6" style={{ fontSize: "17px" }}>
                          {moment(theNews.Date.toDate()).calendar()}
                        </div>
                        <div style={{ fontSize: "17px" }} className="fw5">
                          {theNews.Location}
                        </div>
                      </div>
                      <div
                        className="mt4"
                        style={{ fontSize: "17px", lineHeight: "2em" }}
                      >
                        {theNews.Detail}
                      </div>
                      <div className="w-100 mt4 mb4 flex justify-center">
                        <div className="w-100 ">
                          <img
                            src={theNews.photoUrl1}
                            alt="kyagulanyi2021"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              height: "35vh",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ fontSize: "17px" }} className="fw5 mt4 ">
                        Author: {theNews.Author}
                      </div>
                      <div className="w-100 flex justify-end">
                        <div className="mb5">
                          <Link
                            to="/news"
                            className="pointer w-30"
                            style={{ fontSize: "17px" }}
                          >
                            Back To News
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Content>
                </Layout>
              </div>
            </div>
          ) : (
            <div className="w-100 flex justify-center">
              <div className="w-80">
                <Layout style={{ backgroundColor: "#ffffff" }}>
                  <Content style={{ backgroundColor: "#ffffff" }}>
                    <div className="mt4">
                      <Link
                        to="/news"
                        className="pointer w-25"
                        style={{ fontSize: "17px" }}
                      >
                        Back To News
                      </Link>
                    </div>
                    <div className="mt4">
                      <div className="w-100 flex justify-center">
                        <div className="w-80 ">
                          <img
                            src={theNews.photoUrl}
                            alt="Robert 2021"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              height: "70vh",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="mt4">
                        <Title level={4}>{theNews.Title}</Title>
                      </div>
                      <div
                        className="flex flex-row"
                        style={{ cursor: "default" }}
                      >
                        <div className="fw5 mr6" style={{ fontSize: "17px" }}>
                          {moment(theNews.Date.toDate()).calendar()}
                        </div>
                        <div style={{ fontSize: "17px" }} className="fw5">
                          {theNews.Location}
                        </div>
                      </div>
                      <div
                        className="mt4"
                        style={{ fontSize: "17px", lineHeight: "2em" }}
                      >
                        {theNews.Detail}
                      </div>
                      <div className="w-100 mt4 mb4 flex justify-center">
                        <div className="w-80 ">
                          <img
                            src={theNews.photoUrl1}
                            alt="Kyagulanyi2021"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                              height: "70vh",
                              width: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div style={{ fontSize: "17px" }} className="fw5 mt4 ">
                        Author: {theNews.Author}
                      </div>

                      <div className="w-100 flex justify-end">
                        <div className="mb5">
                          <Link
                            to="/news"
                            className="pointer w-25"
                            style={{ fontSize: "17px" }}
                          >
                            Back To News
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Content>
                </Layout>
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.firestore.ordered.news,
  }
}

export default connect(mapStateToProps)(News)
