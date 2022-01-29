import React from "react";
import Media from "react-media";
import ReactPlayer from "react-player/youtube";
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
                <div
                  className="w-100 h-50 "
                  style={{ backgroundColor: "black" }}
                >
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
                <div
                  className=" "
                  style={{
                    height: "85%",
                    width: "60%",
                    backgroundColor: "black",
                  }}
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
                <div
                  className="w-90  "
                  style={{ height: "75%", backgroundColor: "black" }}
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