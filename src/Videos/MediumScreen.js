import React from "react";
import {
  Layout,
  Typography,
  Input,
  Upload,
  message,
  Divider,
  Select,
  List,
} from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  InboxOutlined,
} from "@ant-design/icons";
import { MdLocationOn } from "react-icons/md";

const { Content } = Layout;
const { Title,Paragraph  } = Typography;
const { Dragger } = Upload;
const { TextArea } = Input;
const { Option } = Select;

const VideoTemplate = ({ desc }) => {
  return (
    <div>
      <div className="w-100">
        <div className="w-100 bg-red" style={{ height: "40vh" }}>
          video
        </div>
        <div className = "fw7"><Paragraph ellipsis={{ rows: 2, expandable:false}} style={{color:"black",fontSize:"16px"}}>{desc}</Paragraph></div>
      </div>
    </div>
  );
};
const props = {
  name: "video",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} video uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} video upload failed.`);
    }
  },
};
const data = [
  { desc: "Today in the north there is too much victory of the National Unity Platform as they endorse Kyagulanyi" },
  { desc: "iam am 3" },
  { desc: "iam am 4" },
  { desc: "iam am 5" },
  { desc: "iam am 6" },
  { desc: "iam am 7" },
  { desc: "iam am 8" },
];
const MediumScreen = () => {
  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <div className="w-100" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="w-100 flex justify-center">
            <div className="w-90 fw7 mt4 mb4">
              <Title level={4} style={{ color: "#0C0474",fontWeight:"700" ,cursor:"default" }}>
                ARCHIVES: VIDEOS
              </Title>
              <div style={{ color: "#0C0474", fontSize: "16px",cursor:"default" }}>
                HOW WERE ELECTIONS CONDUCTED IN YOUR AREA? UPLOAD A VIDEO{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 flex justify-center">
          <div className="w-90">
            <div className="flex flex-row justify-between w-100 mt5">
              <div>
                <Input
                  placeholder="Username or Email"
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </div>
              <div>
                <Input.Password
                  placeholder="Password"
                  size="large"
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone style={{ color: "#ff0000" }} />
                    ) : (
                      <EyeInvisibleOutlined />
                    )
                  }
                />
              </div>
              <div>
                <Input
                  placeholder="Video location"
                  suffix={<MdLocationOn />}
                  size="large"
                />
              </div>
            </div>
            <div className="mt5 w-100 ">
              <Dragger {...props}>
                <p className="ant-upload-drag-icon tc " style={{ marginTop: "50px" }}>
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text tc">
                  Click or drag video file to this area to upload
                </p>
                <p className="ant-upload-hint tc " style={{ marginBottom: "50px" }}>
                  Support for short videos only. Strictly prohibited from uploading videos
                  out of topic. ProtectYourVote
                </p>
              </Dragger>
            </div>
            <div className="mt5 w-100">
              <TextArea rows={5} placeholder="What Really Took Place..." />
            </div>
            <div className="w-100 flex justify-center mt4">
              <div className="Hbtn   flex redbg justify-center  hover-bg-dark-red items-center pt2 pb2 pl3 pr3 pointer">
                <div className="fw7" style={{ fontSize: "16px", color: "#ffffff" }}>
                  UPLOAD
                </div>
              </div>
            </div>
            <div className="mt5">
              <div className="black fw5" style={{ fontSize: "18px", cursor: "default" }}>
                Have no Account? Create one now to upload videos.Lets expose them!{" "}
                <span
                  className="fw7"
                  style={{ color: "#0C0474", fontSize: "18px", cursor: "pointer" }}>
                  CREATE ACCOUNT
                </span>
              </div>
            </div>
            <div className="w-100 mt5">
              <div className="w-40">
                <Divider orientation="right">
                  <div
                    className="fw7"
                    style={{ color: "#0C0474", fontSize: "18px", cursor: "default" }}>
                    UPLOADED VIDEOS
                  </div>
                </Divider>
              </div>
            </div>
            <div
              className="w-100 "
              style={{ display: "flex", justifyContent: "flex-end" }}>
              <div>
                <Select defaultValue="date" style={{ width: 200 }}>
                  <Option value="date">Order by Latest Upload</Option>
                  <Option value="mostViewed">Order by Most Viewed</Option>
                  <Option value="video">Order by Location</Option>
                  <Option value="disabled" disabled>
                    Order by Duration
                  </Option>
                </Select>
              </div>
            </div>
            <div className="w-100 mt4 mb4">
              <List
                grid={{ gutter: [15,30], column: 2 }}
                dataSource={data}
                pagination={{
                  showSizeChanger: true,
                  pageSize: 6,
                }}
                renderItem={(item) => (
                  <List.Item>
                    <VideoTemplate desc={item.desc} />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default MediumScreen;
