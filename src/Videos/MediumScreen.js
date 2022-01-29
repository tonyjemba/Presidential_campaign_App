import React, { useState } from 'react'
import {
  Layout,
  Typography,
  Input,
  Form,
  message,
  Button,
  Divider,
  DatePicker,
  Progress,
  Modal,
  Select,
  List,
  Spin,
} from 'antd'
import { addVideo } from '../Redux/video/Actions';
import { prevPath} from "../Redux/Admin/Actions";
import firebase from '../base';
import { Link } from 'react-router-dom';
import 'video-react/dist/video-react.css';
import { connect } from 'react-redux';
import { MdLocationOn } from 'react-icons/md';
import moment from 'moment';
import { AiFillWarning } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import LoadableVisibility from "react-loadable-visibility/react-loadable";
import { LoadingOutlined } from "@ant-design/icons";
const { Content } = Layout
const { Title, Paragraph } = Typography
const { TextArea } = Input
const { Option } = Select
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}



const ReachableContext = React.createContext()

const config = {
  title: "Video size too Large! should be less than 10MB.",
  okText: <Link to="/videos">Try Again</Link>,
  centered: true,
  content: (
    <>
      <ReachableContext.Consumer>
        {() =>
          `What Should I do then? 

           1. Visit https://www.youcompress.com/ to reduce video size. 
           2. Download Video Dieter 2 app from PlayStore to compress or cut the video.
           3. Download Wondershare UniConverter Desktop App to reduce video size.
          `
        }
      </ReachableContext.Consumer>
    </>
  ),
};
const mapDispatchToProps = (dispatch) => {
  return {
    addVideo: (video) => dispatch(addVideo(video)),
    prevPath: (path) => dispatch(prevPath(path)),
  };
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.Admin.currentUser,
  };
};
const antIcon = <LoadingOutlined style={{ fontSize: 45 }} spin />;

const Loader = ({ pastDelay, error }) => {
  if (error) {
    return <div>error occurred while loading video</div>;
  } else if (pastDelay) {
    return (
      <div
        style={{ width: "100%", height: "100vh" }}
        className="flex items-center justify-center"
      >
        <div>
          <Spin indicator={antIcon} />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
const LoadableComponent = LoadableVisibility({
  loader: () => import("./VideoTemplate"),
  loading: Loader,
});

const MediumScreen = ({ addVideo, currentUser,prevPath, }) => {
  const [modal, contextHolder] = Modal.useModal();

  const [videoUrl, setvideoUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [published] = useState({ published: false });
  const [btn, setBtn] = useState(true);
  const [form] = Form.useForm();
  const [videoState, setvideoState] = useState(false);
  const [select, setSelect] = useState();

  useFirestoreConnect([
    { collection: "Public_Videos", orderBy: ["Date", "desc"] },
  ]);
  const videos = useSelector((state) => state.firestore.ordered.Public_Videos);
  const [searchInput, set_searchInput] = useState("");
  const [search, setSearch] = useState(false);

  const doSearch = (e) => {
    set_searchInput(e.target.value);
    setSearch(true);
  };

  const filteredArray =
    videos &&
    videos.filter((video) =>
      `${video.Description.toLowerCase()} + ${video.Location.toLowerCase()}  + ${moment(
        video.Date.toDate()
      )
        .calendar()
        .toLowerCase()}`.includes(searchInput.toLowerCase())
    );

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file.size < 10000000) {
      setvideoState(false);
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child("videos/" + file.name);
      const uploadTask = fileRef.put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (e) => {
          console.log(e);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setvideoUrl({ videoUrl: url, Path: fileRef.fullPath });
            setBtn(false);
          });
        }
      );
      return;
    }
    setvideoState(true);
    modal.warning(config);
  };

  const onFinish = (values) => {
    if (values) {
      addVideo({ ...values, Date: values.Date._d, type: select, ...videoUrl, ...published });
      message
        .success("Video Has been uploaded!", 3)
        .then(() => form.resetFields());
      setvideoUrl(null);
      setProgress(0);
      setBtn(true);
      return;
    }
    message
      .loading("Verification in progress..", 3)
      .then(() => message.info("Verified! Now try Again.", 3.5));
  };

  return (
    <Layout style={{ backgroundColor: "#ffffff" }}>
      <Content>
        <div className="w-100" style={{ backgroundColor: "#f9f9f9" }}>
          <div className="w-100 flex justify-center">
            <div className="w-90 fw7 mt4 mb4">
              <Title
                level={4}
                style={{
                  color: "#0C0474",
                  fontWeight: "700",
                  cursor: "default",
                }}
              >
                <IconContext.Provider
                  value={{
                    color: "red",
                    size: "30px",
                  }}
                >
                  <div className="pointer ">
                    <AiFillWarning />
                  </div>
                </IconContext.Provider>
                <div>Report Incident</div>
              </Title>
              <div
                style={{
                  color: "#0C0474",
                  fontSize: "16px",
                  cursor: "default",
                }}
              >
                <Title
                  level={1}
                  style={{
                    color: "#0C0474",
                    fontWeight: "lighter",
                    fontSize: "17px",
                  }}
                >
                  NOTE: File shouldn't be greater than 10MBS. All Data will be
                  Uploaded to the UVote App.
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100 flex justify-center">
          <div className="w-90">
            <div className="flex w-90 mt5">
              <div className="mt5 w-100">
                <ReachableContext.Provider>
                  {contextHolder}
                </ReachableContext.Provider>
                <div className="w-100">
                  {videoState ? (
                    <div>
                      <Title level={4}>Please compress your video:</Title>
                      <Title level={1} style={{ fontSize: "16px" }}>
                        How To Do This
                      </Title>
                      <div className="mt3" style={{ fontSize: "16px" }}>
                        Option 1:{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.youcompress.com/"
                        >
                          Click Here
                        </a>{" "}
                        to visit site.
                      </div>
                      <div className="mt3" style={{ fontSize: "16px" }}>
                        Option 2:{" "}
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href="https://play.google.com/store/apps/details?id=com.outplaylab.VideoDiet2&hl=en"
                        >
                          {" "}
                          Click Here
                        </a>{" "}
                        to Download app from PlayStore.
                      </div>
                      <div className="mt3 mb4" style={{ fontSize: "16px" }}>
                        Option 3:{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://videoconverter.wondershare.net/"
                        >
                          {" "}
                          Click Here
                        </a>{" "}
                        to Download desktop app.
                      </div>
                    </div>
                  ) : null}{" "}
                </div>
                <div className="w-100 tc mb4">
                  {currentUser ? null : (
                    <Link to="/volunteer">
                      <Title
                        level={1}
                        style={{ fontWeight: "lighter", fontSize: "20px" }}
                      >
                        Sign in to Upload Evidence
                      </Title>
                    </Link>
                  )}
                </div>
                <Form onFinish={onFinish} {...layout} form={form}>
                  <Form.Item name="videoUrl" label="Add video">
                    <Input
                      type="file"
                      accept="video/*,.mkv"
                      onChange={onFileChange}
                    />
                    <div className="w-100">
                      {progress !== 0 ? (
                        <Progress
                          percent={progress}
                          status={`${progress == 100 ? "success" : "active"}`}
                          size="small"
                          strokeColor={{ "0%": "#000080", "100%": "#ff0000" }}
                        />
                      ) : null}
                    </div>
                  </Form.Item>
                  <Form.Item name="type" label="Select Incident Type"
                  rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      onChange={(val) => {
                        setSelect(val);
                      }}
                      allowClear
                    >
                      <Option value="Other">Other</Option>
                      <Option value="Late Opening of Polling Station">
                        Late Opening of Polling Station
                      </Option>
                      <Option value="No ballots available">
                        No ballots available
                      </Option>
                      <Option value="Agent did not recieve copy of DOR form">
                        Agent did not recieve copy of DOR form
                      </Option>
                      <Option value="DOR envelope not properly sealed">
                        DOR envelope not properly sealed
                      </Option>
                      <Option value="Ballot box not empty at start">
                        Ballot box not empty at start
                      </Option>
                      <Option value="Person voted twice">
                        Person voted twice
                      </Option>
                      <Option value="Person was prevented to vote">
                        Person was prevented to vote
                      </Option>
                      <Option value="Intimidation by police or military">
                        Intimidation by police or military
                      </Option>
                      <Option value="Agent is refused access">
                        Agent is refused access
                      </Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="Location"
                    label="Location"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the Location!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input size="large" suffix={<MdLocationOn />} />
                  </Form.Item>
                  <Form.Item name="Date" label="Date">
                    <DatePicker showTime />
                  </Form.Item>
                  <Form.Item
                    name="Description"
                    label="Describe the incident"
                    rules={[
                      {
                        required: true,
                        message: "Please enter the Description!",
                        whitespace: true,
                      },
                    ]}
                  >
                    <TextArea rows={5} placeholder="Type Here..." />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    {currentUser ? (
                      <Button htmlType="submit" type="primary" disabled={btn}>
                        Upload
                      </Button>
                    ) : (
                      <Link to="/volunteer">
                        <Button
                          disabled
                          type="primary"
                          onClick={() => prevPath("/videos")}
                        >
                          Upload
                        </Button>
                      </Link>
                    )}
                  </Form.Item>
                </Form>
              </div>
            </div>

            <div className="w-100 mt5">
              <div className="w-40">
                <Divider orientation="right">
                  <div
                    className="fw7"
                    style={{
                      color: "#0C0474",
                      fontSize: "18px",
                      cursor: "default",
                    }}
                  >
                    UPLOADED VIDEOS
                  </div>
                </Divider>
              </div>
              <div className="flex flex-column w-50">
                <div className="fw7 black" style={{ fontSize: "1.5vw" }}>
                  Find Video
                </div>
                <div className="w-100 flex flex-row">
                  <Input
                    placeholder="Use any Keyword : Date, Location, category or anything"
                    size="large"
                    onChange={doSearch}
                  />
                </div>
              </div>
            </div>
            <div
              className="w-100 "
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
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
                  grid={{ gutter: [15, 30], column: 2 }}
                  dataSource={search ? filteredArray : videos}
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 40,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <LoadableComponent
                        key={item.id}
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
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(MediumScreen)
