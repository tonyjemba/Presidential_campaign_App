import React from "react";
import {
  message,
    Button,
  Typography,
  List,
  Spin,
} from "antd";
import { useSelector } from "react-redux";
import {
  useFirestoreConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { Player, BigPlayButton, LoadingSpinner } from "video-react";
import "video-react/dist/video-react.css";
import Media from 'react-media';
import { smaller } from '../universal/ScreenSize';
import { addPublicVideo, } from "../Redux/video/Actions";
import { connect } from "react-redux";
import moment from "moment";
import firebase from "../base";

const { Paragraph } = Typography;
const mapDispatchToProps = (dispatch) => {
  return {
    addPublicVideo: (video) => dispatch(addPublicVideo(video)),
  };
};



const Videos = ({ addPublicVideo,}) => {
  useFirestoreConnect([
    { collection: "videos", orderBy: ["published", "asc"] },
  ]);
  const videos = useSelector((state) => state.firestore.ordered.videos);

   
const VideoTemplate = ({
  desc,
  video,
  type,
  date,
  location,
  published,
  publicize,
  path,
  id
}) => {
  return (
    <div>
      <div className="w-100">
        <div className="w-100 mb3 flex flex-row justify-around">
          <div>
            {!published ? (
              <Button type="primary" onClick={publicize}>
                Publish
              </Button>
            ) : (
              <Button type="primary" disabled>
                Publish
              </Button>
            )}
          </div>
          <div>
            <Button
              type="primary"
              onClick={
                () => {
                  firebase.storage().ref(`${path}`).delete().then(() => {
                    firebase
                      .firestore()
                      .collection("videos")
                      .doc(`${id}`)
                      .delete()
                      .then(() =>
                        firebase
                          .firestore()
                          .collection("Public_Videos")
                          .doc(`${id}`)
                          .delete()
                          .then(() => message.info("Video Deleted", 4))
                      )
                      .catch((e) => message.error(e, 4));
                  })
                    .catch((e) => message.error(e, 4));
                }
                
              }
            >
              Delete
            </Button>
          </div>
        </div>
        <div className="w-100 bg-red" style={{ height: "40vh" }}>
          <Player src={video} fluid={false} height="100%" width="100%">
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>
        </div>
        <div className="flex flex-row" style={{ cursor: "default" }}>
          <div className="fw2 mr4" style={{ fontSize: "16px" }}>
            {moment(date.toDate()).calendar()}
          </div>
          <div style={{ fontSize: "16px" }} className="fw2">
            {location}
          </div>
          
        </div>
        <div style={{ fontSize: "16px", marginLeft:0 }} className="fw2">
            Category: {type}
          </div>
        <div className="fw7">
          <Paragraph
            ellipsis={{ rows: 3, expandable: true }}
            style={{ color: "black", fontSize: "16px" }}
          >
            {desc}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
  
  return (
    <div className="w-100">
      <Media queries={{ smaller: smaller }}>
        {(matches) =>
          matches.smaller ? (
            <div>
              {!isLoaded(videos) ? (
                <div className="w-100 pt5 pb5 flex justify-center items-center">
                  <div>
                    <Spin size="large" />
                  </div>
                </div>
              ) : isEmpty(videos) ? (
                <div className="w-100 pt5 pb5 flex justify-center items-center">
                  <div>
                    <Spin size="large" />
                  </div>
                </div>
              ) : (
                <List
                  grid={{ gutter: [15, 30], column: 1 }}
                  dataSource={videos}
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 51,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <VideoTemplate
                        key={item.id}
                        path={item.Path}
                        id={item.id}
                        published={item.published}
                        publicize={() => {
                          addPublicVideo({ ...item, published: true });
                          message.success("Video Published!", 3);
                        }}
                        video={item.videoUrl}
                        type={item.type}
                        location={item.Location}
                        date={item.Date}
                        desc={item.Description}
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          ) : (
            <div>
              {!isLoaded(videos) ? (
                <div className="w-100 pt5 pb5 flex justify-center items-center">
                  <div>
                    <Spin size="large" />
                  </div>
                </div>
              ) : isEmpty(videos) ? (
                <div className="w-100 pt5 pb5 flex justify-center items-center">
                  <div>
                    <Spin size="large" />
                  </div>
                </div>
              ) : (
                <List
                  grid={{ gutter: [15, 30], column: 3 }}
                  dataSource={videos}
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 51,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <VideoTemplate
                        key={item.id}
                        publicize={() => {
                          addPublicVideo({ ...item, published: true });
                          message.success("Video Published!", 3);
                        }}
                        published={item.published}
                        path={item.Path}
                        id={item.id}
                        type={item.type}
                        video={item.videoUrl}
                        location={item.Location}
                        date={item.Date}
                        desc={item.Description}
                      />
                    </List.Item>
                  )}
                />
              )}
            </div>
          )
        }
      </Media>
    </div>
  );
};

export default connect(null,mapDispatchToProps)(Videos);