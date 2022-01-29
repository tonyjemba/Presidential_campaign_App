import React from "react";
import { Layout, Carousel } from "antd";
import "./css/main.css";
import { Collapse, Typography, Row,Affix,  Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import HomeHeroContainer from "../HomeHeroContainer/HomeHeroContainer";
import { CaretRightOutlined } from "@ant-design/icons";
import { BsArrowRight } from "react-icons/bs";
import { IconContext } from "react-icons";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import NewsCard from "./NewsCard";
import { GrTwitter } from "react-icons/gr";
import moment from "moment";
import { FaRegFileVideo } from "react-icons/fa";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { BsFillClockFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { Helmet } from "react-helmet";


const { Content} = Layout;
const { Paragraph, Title } = Typography;

const { Panel } = Collapse;

class SmallScreen extends React.Component {
  constructor() {
    super();
    this.carousel = React.createRef();
  }

  render() {
       const { events, news, HomeContent, currentUser } = this.props;
       const latest = events && events.slice(0, 5);
       const latestnews = news && news.slice(0, 4);

       const slogan = HomeContent && HomeContent[1].Slogan.toUpperCase();
       const noteHeading = HomeContent && HomeContent[2].Heading;
       const noteContent = HomeContent && HomeContent[2].Content;
       const panel1Heading = HomeContent && HomeContent[3].Panel1Heading;
       const panel1Content = HomeContent && HomeContent[3].Panel1Content;
       const panel2Heading = HomeContent && HomeContent[3].Panel2Heading;
       const panel2Content = HomeContent && HomeContent[3].Panel2Content;
       const panel3Heading = HomeContent && HomeContent[3].Panel3Heading;
       const panel3Content = HomeContent && HomeContent[3].Panel3Content;
       const panel4Heading = HomeContent && HomeContent[3].Panel4Heading;
       const panel4Content = HomeContent && HomeContent[3].Panel4Content;
       const settings = {
         dots: false,
         infinite: true,
         autoplaySpeed: 8000,
         speed: 2000,
         slidesToShow: 2,
         swipeToSlide: true,
         adaptiveHeight: true,
         slidesToScroll: 1,
       };



 

       const Tmp = ({
         id,
         day,
         month,
         time,
         image,
         title,
         location,
         detail,
       }) => {
         return (
           <div className="flex flex-column w-90">
             <Link to={"/event/" + id}>
               <div className="w-100 pointer">
                 <img src={image} alt="event" className="eimg" />
               </div>
               <Layout className="w-100" style={{ backgroundColor: "#ffffff" }}>
                 <Content
                   className="flex flex-row justify-between"
                   style={{ backgroundColor: "#ffffff" }}
                 >
                   <div className=" mt1 tc white fw7 w-20 pa0">
                     <div
                       style={{
                         fontSize: "16px",
                         backgroundColor: "#ff0000",
                         cursor: "default",
                       }}
                     >
                       {day} <br /> {month}
                     </div>
                   </div>
                   <div className=" mt1 w-75 pointer">
                     <Paragraph
                       ellipsis={{ rows: 2, expandable: false }}
                       style={{
                         color: "#000000",
                         fontSize: "16px",
                         margin: "0px",
                       }}
                       className="fw7"
                     >
                       {title}
                     </Paragraph>
                     <div className="w-100 flex flex-row justify-between items-center">
                       <div className=" flex flex-row  items-center  ">
                         <div className="mr1">
                           <IconContext.Provider
                             value={{
                               color: "rgba(0,0,0,0.5)",
                               // size: "1.1vw",
                             }}
                           >
                             <div className="pointer  mr1">
                               <BsFillClockFill />
                             </div>
                           </IconContext.Provider>
                         </div>
                         <div
                           className="fw4 pointer"
                           style={{ verticalAlign: "middle" }}
                         >
                           {time}
                         </div>
                       </div>
                       <div className=" flex flex-row  items-center content-end">
                         <div className="mr1">
                           <IconContext.Provider
                             value={{
                               color: "rgba(0,0,0,0.5)",
                               // size: "1.3vw",
                             }}
                           >
                             <div className="pointer  mr1 mt1 ">
                               <MdLocationOn />
                             </div>
                           </IconContext.Provider>
                         </div>
                         <div className="fw4 pointer" style={{}}>
                           {location}
                         </div>
                       </div>
                     </div>
                   </div>
                 </Content>
               </Layout>
               <div>
                 <Paragraph
                   ellipsis={{ rows: 2, expandable: false }}
                   style={{
                     color: "#000000",
                     textAlign: "justify",
                     fontSize: "16px",
                     textJustify: "inter-word",
                     margin: "0px",
                   }}
                 >
                   {detail}
                 </Paragraph>
               </div>
             </Link>
           </div>
         );
       };


    const Panels = () => {
      return (
        <div className="w-100 mt6 flex justify-center items-center">
          <div className="w-90  flex flex-row justify-between">
            <Layout>
              <Content style={{ backgroundColor: "#ffffff" }}>
                <div className=" w-100 mb2">
                  <Collapse
                    defaultActiveKey={["1"]}
                    style={{ fontSize: "17px" }}
                    ghost
                    expandIconPosition="right"
                    style={{ fontsize: "16px", color: "#000000" }}
                    accordion
                    expandIcon={({ isActive }) => (
                      <div
                        className="pointer flex justify-center items-center"
                        style={{
                          backgroundColor: `${
                            isActive ? "#ff0000" : "#0C0474"
                          }`,
                          borderRadius: "50%",
                        }}
                      >
                        <CaretRightOutlined
                          rotate={isActive ? -90 : 90}
                          className="pa2 "
                          style={{ color: "#ffffff" }}
                        />
                      </div>
                    )}
                  >
                    <Panel
                      header={<Title level={4}>{panel1Heading}</Title>}
                      key="1"
                    >
                      <div style={{ fontSize: "16px", color: "#000000" }}>
                        {panel1Content}
                      </div>
                    </Panel>
                    <Panel
                      header={<Title level={4}>{panel2Heading}</Title>}
                      key="2"
                    >
                      <div style={{ fontSize: "16px", color: "#000000" }}>
                        {panel2Content}
                      </div>
                    </Panel>
                    <Panel
                      header={<Title level={4}>{panel3Heading}</Title>}
                      key="3"
                    >
                      <div style={{ fontSize: "16px", color: "#000000" }}>
                        {panel3Content}
                      </div>
                    </Panel>

                    <Panel
                      header={<Title level={4}>{panel4Heading}</Title>}
                      key="4"
                    >
                      <div style={{ fontSize: "16px", color: "#000000" }}>
                        {panel4Content}
                        <br />

                        <div className="mt3 w-60">
                          <Button
                            type="primary"
                            shape="round"
                            icon={<DownloadOutlined />}
                            size="large"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            target="_blank"
                            href="https://peoplepower.org.ug/wp-content/uploads/2020/11/NUP-MANIFESTO.pdf"
                          >
                            Download Manifesto
                          </Button>
                        </div>
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Content>
            </Layout>
          </div>
        </div>
      );
    };
    return (
      <Layout className="relative bg-white">
        <Layout className="bg-white">
          <Layout>
            <Content className="transparent wh">
              <HomeHeroContainer />
            </Content>
          </Layout>
          <Layout className="top ">
            <Content className="bg-white">
              <div className="w-100 flex flex-column justify-center items-center">
                <Helmet>
                  <title>
                    Vote Kyagulanyi Ssentamu Robert for President | A New Uganda.
                  </title>
                  <meta
                    name="description"
                    content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of  Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people"
                  />
                  <meta
                    name="keywords"
                    content="bobiwine, kyagulanyi, Ssentamu, Robert, NationalUnityPlatform,NUP,people,power,uganda, campaigns, president, website, bobi, wine, kyagulanyi2021,weareremovingadictator"
                  />
                  <meta
                    name="robots"
                    content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                  />
                  <meta property="og:locale" content="en_US" />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:title"
                    content="Vote Kyagulanyi Ssentamu Robert for President| Campaign Website People Power"
                  />
                  <meta
                    property="og:description"
                    content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
                  />
                  <meta
                    property="og:url"
                    content="https://kyagulanyi2021.com"
                  />
                  <meta
                    property="og:site_name"
                    content="kyagulanyi2021 Campaign Website"
                  />
                  <meta
                    name="twitter:description"
                    content="kyagulanyi for president 2021. This website was established to support Kyagulanyi's campaigns and provide information to the public regarding the unlawful political persecution of Kyagulanyi Ssentamu Robert (Bobi Wine) and the Ugandan people."
                  />
                  <meta
                    name="twitter:title"
                    content="Vote Kyagulanyi Ssentamu Robert for President| Campaign Website People Power"
                  />
                  <link rel="canonical" href="https://kyagulanyi2021.com" />
                </Helmet>
                <div className="w-100 " style={{ backgroundColor: "#0C0474" }}>
                  <div className="w-100 ">
                    <div className="w-100 mt3  flex flex-column justify-between">
                      <div
                        className="h-100  tc w-100 white fw7"
                        style={{ fontSize: "4.2vw" }}
                      >
                        {slogan}
                      </div>
                      <div className="w-100  h-100 ">
                        <div
                          className=" w-100 tc white mb1 mt3"
                          style={{ fontSize: "4.2vw" }}
                        >
                          {currentUser ? null : (
                            <div
                              style={{
                                color: "#ffffff",
                                fontWeight: "lighter",
                              }}
                            >
                              Sign in to Volunteer.
                            </div>
                          )}
                        </div>
                        <div className="w-100 flex  items-center justify-center">
                          <div className=" w-90">
                            {currentUser ? (
                              <div className="w-100 tc">
                                <div
                                  style={{
                                    fontWeight: "lighter",
                                    color: "#ffffff",
                                    fontSize: "3.2vw",
                                  }}
                                >
                                  Welcome back {currentUser.name}!
                                </div>
                                <div
                                  style={{
                                    fontWeight: "lighter",
                                    color: "#ffffff",
                                    fontSize: "3.2vw",
                                  }}
                                >
                                  Thank You For Supporting Kyagulanyi #People
                                  Power.
                                </div>
                              </div>
                            ) : (
                              <div>
                                <Link to="/volunteer">
                                  <div className="w-100 flex justify-center">
                                    <div
                                      className="w-33 Hbtn pointer tc mb4 white fw7 pt2 pb2 pl2 pr2 hover-bg-dark-red"
                                      style={{
                                        backgroundColor: "#FF0000",
                                        fontSize: "16px",
                                      }}
                                    >
                                      Sign in
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Affix offsetTop={150}>
                    <Link to="/videos">
                      <Button type="primary">
                        <div className="flex">
                          <div>
                            <IconContext.Provider
                              value={{
                                color: "white",
                                size: "18px",
                              }}
                            >
                              <div className="pointer mr2 ">
                                <FaRegFileVideo />
                              </div>
                            </IconContext.Provider>
                          </div>
                          <div>Upload Video</div>
                        </div>
                      </Button>
                    </Link>
                  </Affix>
                </div>
                <div className="mt5">
                  <Title level={3}>{noteHeading}</Title>
                </div>
                <div
                  className="w-100  tc  pa0 mb3   flex justify-center "
                  style={{ fontSize: "0.5vw", cursor: "default", top: "100%" }}
                >
                  <div
                    className="ml2 mr2"
                    style={{ color: "#ff0000", backgroundColor: "#ff0000" }}
                  >
                    llljemba tonylllllljemba tonylll
                  </div>
                </div>
                <div
                  className="w-90  tc  "
                  style={{ fontSize: "18px", color: "#000000" }}
                >
                  {noteContent}
                </div>
              </div>

              <Panels />
              <Layout style={{ backgroundColor: "#ffffff" }}>
                <Content style={{ backgroundColor: "#ffffff" }}>
                  <div className="w-100 flex justify-center mt6">
                    <div className="w-90 flex justify-center">
                      <div
                        className="w-100 fw8 tc mc relative"
                        style={{
                          fontSize: "10vw",
                          cursor: "default",
                        }}
                      >
                        <div
                          className="tc w-100 absolute  black"
                          style={{ top: "20%" }}
                        >
                          <div style={{ fontSize: "4vw" }}>
                            {" "}
                            Events During <br /> The Struggle
                          </div>
                          <span
                            className="w-100  tc  pa0  absolute  flex justify-center"
                            style={{ fontSize: "0.5vw", top: "100%" }}
                          >
                            <span
                              style={{
                                color: "#ff0000",
                                backgroundColor: "#ff0000",
                              }}
                            >
                              llljemba tonylll
                            </span>
                          </span>
                        </div>
                        MISSION <br /> 2021
                      </div>
                    </div>
                  </div>
                </Content>
              </Layout>
              <div className="w-100 flex justify-center items-center">
                <div className="w-90  flex flex-row justify-between">
                  <div className=" w-90 " style={{ height: "50vh" }}>
                    <Carousel
                      autoplay
                      {...settings}
                      ref={(node) => (this.carousel = node)}
                    >
                      {latest &&
                        latest.map((data) => (
                          <Tmp
                            key={data.id}
                            id={data.id}
                            location={data.Location}
                            title={data.Title}
                            day={moment(data.Date.toDate(), "MMM Do YY").format(
                              "D"
                            )}
                            month={moment(
                              data.Date.toDate(),
                              "MMM Do YY"
                            ).format("MMM")}
                            time={moment(
                              data.Date.toDate(),
                              "MMM Do YY"
                            ).format("LT")}
                            detail={data.Detail}
                            image={data.photoUrl}
                          />
                        ))}
                    </Carousel>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </Layout>
        <Layout style={{ backgroundColor: "#ffffff" }}>
          <Content style={{ backgroundColor: "#ffffff" }}>
            <div className="w-100 flex justify-center bg-white mt6">
              <div className="w-50">
                <div
                  className="w-100  pl3 pr3 pt4 pb4 mt4 pointer"
                  style={{
                    backgroundColor: "#00acee50",
                    border: "10px",
                    borderColor: "blue",
                  }}
                >
                  <Title
                    style={{
                      color: "white",
                      cursor: "default",
                      display: "flex",
                      flexDirection: "row",
                    }}
                    level={4}
                  >
                    <div className="mr2">
                      <IconContext.Provider
                        value={{
                          color: "#00acee",
                          size: "17px",
                        }}
                      >
                        <div className="pointer  ">
                          <GrTwitter />
                        </div>
                      </IconContext.Provider>
                    </div>
                    <div>Latest Tweet</div>
                  </Title>
                  <div className="fw7 white mt2" style={{ fontStyle: "16px" }}>
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="HEBobiwine"
                      options={{
                        tweetLimit: "1",
                        width: "100%",
                        height: "100%",
                      }}
                      noHeader="true"
                      noBorders="true"
                      noFooter="true"
                    ></TwitterTimelineEmbed>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Content>
        </Layout>
        <div className="w-100 bg-white pt5 flex justify-center items-center">
          <div className="w-90 flex flex-row ">
            <div className="black fw7 mr4" style={{ fontSize: "6vw" }}>
              Make Everyone <br /> Know Who <br />
              We Are!
            </div>
            <div className=" flex  justify-center   items-center ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://kyagulanyi2021stores.bigcartel.com/"
              >
                <div
                  className="fw7 relative tc Hbtn redbg hover-bg-dark-red  pointer pt1 pb1 pl5 pr5 ml4"
                  style={{ fontSize: "16px", color: "#ffffff" }}
                >
                  <div
                    className="absolute arrow "
                    style={{ top: "8%", right: "9%" }}
                  >
                    <IconContext.Provider
                      value={{
                        color: "white",
                        size: "30px",
                      }}
                    >
                      <div className="pointer arrow fw8">
                        <BsArrowRight />
                      </div>
                    </IconContext.Provider>
                  </div>
                  VISIT STORE
                </div>
              </a>
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "#ffffff" }}>
          <div className="w-100 bg-white pt5 ">
            <Link to="/news">
              <div className="w-100 tc black fw7" style={{ fontSize: "3vw" }}>
                Latest News
              </div>
            </Link>
            <div className="w-100  flex justify-center">
              <div className="w-90 ">
                <div className="w-100 mt4">
                  <Row gutter={[30, 34]}>
                    {latestnews &&
                      latestnews.map((news) => (
                        <NewsCard
                          key={news.id}
                          id={news.id}
                          date={moment(news.Date.toDate()).calendar()}
                          author={news.Author}
                          span={12}
                          fontSize="17px"
                          title={news.Title}
                          image={news.photoUrl}
                        />
                      ))}
                  </Row>
                </div>
                <div className="w-100 flex justify-center items-center">
                  <Link to="/news">
                    <div className="Hbtn  mt3 flex redbg justify-center pl4 pr4 pt1 pb1 mb5 hover-bg-dark-red items-center pointer">
                      <div
                        className="fw7"
                        style={{ fontSize: "14px", color: "#ffffff" }}
                      >
                        SEE MORE
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
export default compose(
  firestoreConnect(() => [
    { collection: "events", orderBy: ["Date", "desc"] },
    { collection: "news", orderBy: ["Date", "desc"] },
    { collection: "HomeContent" },
  ]),
  connect((state, props) => ({
    events: state.firestore.ordered.events,
    news: state.firestore.ordered.news,
    HomeContent: state.firestore.ordered.HomeContent,
     currentUser: state.Admin.currentUser,
  }))
)(SmallScreen);
