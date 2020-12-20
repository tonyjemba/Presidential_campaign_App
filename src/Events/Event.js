import React, { useEffect}from "react";
import { Layout, Typography } from "antd";
import { connect } from 'react-redux';
import { useParams,Link} from "react-router-dom";
import moment from "moment";
import Media from 'react-media';
import { smaller } from '../universal/ScreenSize';

const { Content } = Layout;
const { Title } = Typography;

  const Event = ({events}) => {
    
    const id = {...useParams()}
    const eventArray = events.filter((e) =>e.id === id.id);
    const event = { ...eventArray[0] }
    
    useEffect(() => {
       //listen refresh event
    onbeforeunload = e => "Goback"
    return function cleanup() {
      onbeforeunload = null
    };
  });
    
  return (
    <div className="w-100">
      <Media queries={{ smaller: smaller }}>
        {(matches) =>
          matches.smaller ? (
            <div>
              
              <div className="w-100 flex justify-center">
                <div className="w-90 mb4 mt4">
                  <Layout style={{ backgroundColor: "#ffffff" }}>
                    <Content style={{ backgroundColor: "#ffffff" }}>
                      <div className="mt4">
                        <Link className="pointer w-30" to="/events">
                          {" "}
                          Go back to events
                        </Link>
                      </div>
                      <div className="mt4">
                        <div className="w-100 flex justify-center">
                          <div className="w-85 ">
                            <img
                              src={event.photoUrl}
                              alt="event"
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
                          <Title level={3} sytle={{ color: "#ff0000" }}>
                            {event.Title}
                          </Title>
                        </div>
                        <div
                          className="flex flex-row"
                          style={{ cursor: "default" }}
                        >
                          <div
                            className="fw7 mr6"
                            style={{ color: "#000080", fontSize: "17px" }}
                          >
                            {moment(event.Date.toDate()).calendar()}
                          </div>
                          <div
                            style={{ color: "#000080", fontSize: "17px" }}
                            className="fw7"
                          >
                            {event.Location}
                          </div>
                        </div>
                        <div
                          className="mt4"
                          style={{ fontSize: "17px", lineHeight: "1.8em" }}
                        >
                          {event.Detail}
                        </div>
                        <div className="mt5">
                          <div className="w-100 flex mt4 justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl1}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div className="w-100 flex mt4 justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl2}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div className="w-100 flex mt4 justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl3}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt4 mb5">
                        <Link className="pointer w-30" to="/events">
                          {" "}
                          Go back to events
                        </Link>
                      </div>
                    </Content>
                  </Layout>
                </div>
              </div>
            </div>
          ) : (
            <div>
              
              <div className="w-100 flex justify-center">
                <div className="w-90 mb4 mt4">
                  <Layout style={{ backgroundColor: "#ffffff" }}>
                    <Content style={{ backgroundColor: "#ffffff" }}>
                      <div className="mt4">
                        <Link className="pointer w-30" to="/events">
                          {" "}
                          Go back to events
                        </Link>
                      </div>
                      <div className="mt4">
                        <div className="w-100 flex justify-center">
                          <div className="w-80 ">
                            <img
                              src={event.photoUrl}
                              alt="event"
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
                          <Title level="5" style={{ color: "#ff0000" }}>
                            {event.Title}
                          </Title>
                        </div>
                        <div
                          className="flex flex-row"
                          style={{ cursor: "default" }}
                        >
                          <div
                            className="fw7 mr6"
                            style={{ color: "#000080", fontSize: "17px" }}
                          >
                            {moment(event.Date.toDate()).calendar()}
                          </div>
                          <div
                            style={{ color: "#000080", fontSize: "17px" }}
                            className="fw7"
                          >
                            {event.Location}
                          </div>
                        </div>
                        <div
                          className="mt4"
                          style={{
                            fontSize: "17px",
                            lineHeight: "1.8em",
                            wordSpacing: "0.5em",
                          }}
                        >
                          {event.Detail}
                        </div>
                        <div className="mt5">
                          <div className="w-100 flex justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl1}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div className="w-100 mt4 flex justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl2}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                          <div className="w-100 mt4 flex justify-center">
                            <div className="w-85 ">
                              <img
                                src={event.photoUrl3}
                                alt="event"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                  height: "100%",
                                  width: "100%",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt4 mb5">
                        <Link className="pointer w-30" to="/events">
                          {" "}
                          Go back to events
                        </Link>
                      </div>
                    </Content>
                  </Layout>
                </div>
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
        events:state.firestore.ordered.events
    }
}
export default connect(mapStateToProps)(Event);