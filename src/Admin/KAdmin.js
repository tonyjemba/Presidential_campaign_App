import React from "react";
import {
  Typography,
  Layout,
  Tabs,
  Form,
  Input,
  message,
  DatePicker,
  Button,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Content } = Layout;
const { TabPane } = Tabs;
const { Dragger } = Upload;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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

const onFinishNews = (values) => {
console.log("Received values of form: " , values);
};

const onFinishEvents = (values) => {
  console.log("Received values of form: ", values);
};
// values.Date._d    To get date
const KAdmin = () => {
  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Admin Panel
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            Add new Events and News
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-90">
          <Layout style={{ backgroundColor: "#ffffff" }}>
            <Content style={{ backgroundColor: "#ffffff" }}>
              <div className="mt5 mb5 w-100 ">
                <Tabs defaultActiveKey="1" type="card">
                  <TabPane tab="Add Event" key="1">
                    <div className="mt4">
                      <Form onFinish={onFinishEvents} {...layout}>
                        <Form.Item
                          name="Title"
                          label="Title"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the Title!",
                              whitespace: true,
                            },
                          ]}>
                          <Input size="large" />
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
                          ]}>
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item name="Date" label="Date" >
                          <DatePicker showTime />
                        </Form.Item>
                        <Form.Item label="Photo" name="Photo">
                          <Form.Item name="Photo">
                            <Dragger {...props}>
                              <p
                                className="ant-upload-drag-icon tc "
                                style={{ marginTop: "50px" }}>
                                <InboxOutlined />
                              </p>
                              <p className="ant-upload-text tc">
                                Click or drag image file to this area to upload
                              </p>
                              <p
                                className="ant-upload-hint tc "
                                style={{ marginBottom: "50px" }}>
                                Support for a single upload.
                              </p>
                            </Dragger>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item
                          label="Detail"
                          name="Detail"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the Location!",
                              whitespace: true,
                            },
                          ]}>
                          <Input.TextArea  rows={6}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                          <Button type="primary" htmlType="submit">
                            Add Event
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane tab="Add News" key="2">
                    <div className="mt4">
                       <Form onFinish={onFinishNews} {...layout}>
                        <Form.Item
                          name="Title"
                          label="Title"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the Title!",
                              whitespace: true,
                            },
                          ]}>
                          <Input size="large" />
                        </Form.Item>
                          <Form.Item
                          name="Author"
                          label="Author"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the Author!",
                              whitespace: true,
                            },
                          ]}>
                          <Input size="large" />
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
                          ]}>
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item label="Photo" name="Photo">
                          <Form.Item name="Photo">
                            <Dragger {...props}>
                              <p
                                className="ant-upload-drag-icon tc "
                                style={{ marginTop: "50px" }}>
                                <InboxOutlined />
                              </p>
                              <p className="ant-upload-text tc">
                                Click or drag image file to this area to upload
                              </p>
                              <p
                                className="ant-upload-hint tc "
                                style={{ marginBottom: "50px" }}>
                                Support for a single upload.
                              </p>
                            </Dragger>
                          </Form.Item>
                        </Form.Item>
                        <Form.Item
                          label="Detail"
                          name="Detail"
                          rules={[
                            {
                              required: true,
                              message: "Please enter the Location!",
                              whitespace: true,
                            },
                          ]}>
                          <Input.TextArea  rows={6}/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                          <Button type="primary" htmlType="submit">
                            Add News
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                  </TabPane>
                  <TabPane tab="Store Orders" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                  <TabPane tab="Other" key="4">
                    Content of Tab Pane 4
                  </TabPane>
                </Tabs>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default KAdmin;

