import React from "react";
import { List, Spin } from "antd";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import Media from "react-media";
import { smaller } from "../universal/ScreenSize";
import { compose } from "redux";

const Template = ({ name, email, phone, help, village, district }) => {
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
                village: {village}
              </div>
              <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                district: {district}
              </div>
              <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                help: {help}
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
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  village: {village}
                </div>
                <div style={{ fontSize: "15.5px", fontWeight: "lighter" }}>
                  district: {district}
                </div>
              </div>
              <div
                className="mt3"
                style={{ fontSize: "15.5px", fontWeight: "lighter" }}
              >
                Help: {help}
              </div>
            </div>
          )
        }
      </Media>
    </div>
  );
};
const Involved = ({ involved }) => {
  return (
    <div className="w-100">
      <div>
        {!isLoaded(involved) ? (
          <div className="w-100 pt5 pb5 flex justify-center items-center">
            <div>
              <Spin size="large" />
            </div>
          </div>
        ) : isEmpty(involved) ? (
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
                dataSource={involved}
                renderItem={(val) => (
                  <List.Item>
                    <Template
                      key={val.id}
                      name={val.Name}
                      email={val.email}
                      village={val.village}
                            phone={val.phone}
                            district = {val.district}
                      help={val.help}
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
  firestoreConnect(() => ["involved", ]),
  connect((state, props) => ({
    involved: state.firestore.ordered.involved,
  }))
)(Involved);
