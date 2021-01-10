import React from "react";
import { Typography } from "antd";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ReplayControl,
  ControlBar,
} from "video-react";

import moment from "moment";
const { Paragraph } = Typography;

const VideoTemplate = ({ desc, video, date, location,type  }) => {
  return (
    <div>
      <div className="w-100">
        <div className="w-100 " style={{ height: "40vh" }}>
          <Player src={video} fluid={false} height="100%" width="100%">
            <BigPlayButton position="center" />
            <LoadingSpinner />
            <ControlBar autoHide={false}>
              <ReplayControl seconds={10} order={2.2} />
            </ControlBar>
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
        <div style={{ fontSize: "16px" }} className="fw2">
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

export default VideoTemplate;

