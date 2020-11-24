import React, { useState } from "react";
import { Form, Input, Button, message,Progress } from "antd";
import { connect } from "react-redux";
import { addPanels } from "../Redux/Admin/Actions";
import firebase from "../base";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPanels: (image) => dispatch(addPanels(image)),
  };
};

const Panels = ({ addPanels }) => {
  const [ShortNotes, setShortNotes] = useState(null);
  const [form] = Form.useForm();
const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [btn, setBtn] = useState(true);
  
  
  const onFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child("images/" + file.name);
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
          setImageUrl({ imageUrl: url });
          setBtn(false);
        });
      }
    );
  };

  const finished = (values) => {
    setShortNotes({ ...values,...imageUrl });
    if (!btn && ShortNotes) {
      addPanels(ShortNotes);
      message.success(" Added successfully!", 3).then(() => form.resetFields());
      setShortNotes(null);
            setImageUrl(null);
            setProgress(0);
            setBtn(true);
      return;
    }
    message
      .loading("Verification in progress..", 3)
      .then(() => message.info("Verified! Now try Again.", 3.5));
  };
  return (
    <div className="mt4">
      <Form onFinish={finished} {...layout} form={form}>
        <Form.Item name="imageUrl" label="Side Image">
          <Input type="file" accept="image/*" onChange={onFileChange} />
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
        <Form.Item
          name="Panel1Heading"
          label="Panel 1 Heading"
          rules={[
            {
              required: true,
              message: "Please enter a heading.",
              whitespace: true,
            },
          ]}
        >
          <Input size="large" maxLength={35} />
        </Form.Item>
        <Form.Item
          label="Panel 1 Content"
          name="Panel1Content"
          rules={[
            {
              required: true,
              message: "Please Write something!",
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item
          name="Panel2Heading"
          label="Panel 2 Heading"
          rules={[
            {
              required: true,
              message: "Please enter a heading.",
              whitespace: true,
            },
          ]}
        >
          <Input size="large" maxLength={35} />
        </Form.Item>
        <Form.Item
          label="Panel 2 Content"
          name="Panel2Content"
          rules={[
            {
              required: true,
              message: "Please Write something!",
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item
          name="Panel3Heading"
          label="Panel 3 Heading"
          rules={[
            {
              required: true,
              message: "Please enter a heading.",
              whitespace: true,
            },
          ]}
        >
          <Input size="large" maxLength={35} />
        </Form.Item>
        <Form.Item
          label="Panel 3 Content"
          name="Panel3Content"
          rules={[
            {
              required: true,
              message: "Please Write something!",
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item
          name="Panel4Heading"
          label="Panel 4 Heading"
          rules={[
            {
              required: true,
              message: "Please enter a heading.",
              whitespace: true,
            },
          ]}
        >
          <Input size="large" maxLength={35} />
        </Form.Item>
        <Form.Item
          label="Panel 4 Content"
          name="Panel4Content"
          rules={[
            {
              required: true,
              message: "Please Write something!",
              whitespace: true,
            },
          ]}
        >
          <Input.TextArea rows={6} />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button htmlType="submit" type="primary" disabled={btn}>
            Submit Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Panels);
