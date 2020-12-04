import React from "react";
import Media from "react-media";
import ReactPlayer from "react-player/youtube";
import { Helmet } from "react-helmet";
import "./live.css";
import { smaller ,Large} from "../ScreenSize";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, } from 'react-redux-firebase';

const Live = () => {
      useFirestoreConnect([
        { collection: "images" },
      ]);
    const video = useSelector((state) => state.firestore.ordered.images);
    const url = video && video[6].youtubeID;
    return (
      <div className="w-100">
        <Media queries={{ smaller: smaller, Large: Large }}>
          {(matches) =>
            matches.smaller ? (
              <div className="flex items-start w-100 vh-75 mt4">
                <Helmet>
                  <title>
                    Kyagulanyi Ssentamu Robert for President| Live stream
                  </title>
                  <meta
                    name="bobi wine |Live stream"
                    content="kyagulanyi for president 2021. Live stream Kyagulanyi Ssentamu Robert Campaigns and the voting process in Uganda, National Unity Platform Uganda (bobi wine) (People Power, Our Power)."
                  />
                </Helmet>
                <div className="w-100 h-50 " style={{ backgroundColor: "#fbfbfb" }}>
                  <ReactPlayer
                    url={url}
                    height="100%"
                    width="100%"
                    controls={true}
                  />
                </div>
              </div>
            ) : matches.Large ? (
              <div className="flex items-start justify-center w-100 vh-75 mt4">
                <Helmet>
                  <title>
                    Kyagulanyi Ssentamu Robert for President| Live stream
                  </title>
                  <meta
                    name="bobi wine |Live stream"
                    content="kyagulanyi for president 2021. Live stream Kyagulanyi Ssentamu Robert Campaigns and the voting process in Uganda, National Unity Platform Uganda (bobi wine) (People Power, Our Power)."
                  />
                </Helmet>
                <div
                  className=" "
                  style={{ height: "85%", width: "60%", backgroundColor: "#fbfbfb" }}
                >
                  <ReactPlayer
                    url={url}
                    height="100%"
                    width="100%"
                    controls={true}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-center w-100 vh-75 mt4">
                <Helmet>
                  <title>
                    Kyagulanyi Ssentamu Robert for President| Live stream
                  </title>
                  <meta
                    name="bobi wine |Live stream"
                    content="kyagulanyi for president 2021. Live stream Kyagulanyi Ssentamu Robert Campaigns and the voting process in Uganda, National Unity Platform Uganda (bobi wine) (People Power, Our Power)."
                  />
                </Helmet>
                <div
                  className="w-90  "
                  style={{ height: "75%", backgroundColor: "#fbfbfb" }}
                >
                  <ReactPlayer
                    url={url}
                    height="100%"
                    width="100%"
                    controls={true}
                  />
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
}
export default Live;