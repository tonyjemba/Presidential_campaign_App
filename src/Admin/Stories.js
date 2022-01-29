import React from "react";
import {   List, Spin } from "antd";
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Media from "react-media";
import { smaller } from "../universal/ScreenSize";
import { compose } from "redux";


  const Template = ({ name, email, phone, story }) => {
    return (
      <div className="w-100">
        <Media queries={{ smaller: smaller }}>
          {(matches) =>
            matches.smaller ? (
              <div>
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  Name: {name}
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  Email: {email}
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  Phone Number: {phone}
                </div>
                
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  story: {story}
                </div>
              </div>
            ) : (
              <div>
                <div className="w-100 flex justify-between">
                  <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                    Name: {name}
                  </div>
                  <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                    Email: {email}
                  </div>
                  <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                    Phone Number: {phone}
                  </div>
                 
                </div>
                <div className="mt3" style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  story: {story}
                </div>
              </div>
            )
          }
        </Media>
      </div>
    );
  };
const Stories = ({ stories }) => {
  return (
    <div className="w-100">
      <div>
        {!isLoaded(stories) ? (
          <div className="w-100 pt5 pb5 flex justify-center items-center">
            <div>
              <Spin size="large" />
            </div>
          </div>
        ) : isEmpty(stories) ? (
          <div className="w-100 pt5 pb5 flex justify-center items-center">
            <div>
              <Spin size="large" />
            </div>
          </div>
        ) : (
          <div>
            {
              <List
                pagination={{
                  showSizeChanger: true,
                  pageSize: 50,
                  pageSizeOptions: ["10", "30", "100"],
                }}
                dataSource={stories}
                renderItem={(val) => (
                  <List.Item>
                    <Template
                      key={val.id}
                      name={val.name}
                      email={val.email}
                  
                      phone={val.phone}
                      story={val.story}
                    />
                  </List.Item>
                )}
              />
            }
          </div>
        )}
      </div>
    </div>
  );
};
export default compose(
  firestoreConnect(() => ["stories"]),
  connect((state, props) => ({
    stories: state.firestore.ordered.stories,
  }))
)(Stories);

