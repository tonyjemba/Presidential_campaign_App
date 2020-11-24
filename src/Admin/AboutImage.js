import React, { useState } from "react";
import { Form, Input, Button, message, Progress } from "antd";
import { connect } from "react-redux";
import { addAboutImage } from "../Redux/Admin/Actions";
import firebase from "../base";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAboutImage: (image) => dispatch(addAboutImage(image)),
  };
};

const AboutImage = ({ addAboutImage }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [btn, setBtn] = useState(true);
  const [form] = Form.useForm();

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

  const finished = () => {
    if (!btn && imageUrl) {
      addAboutImage(imageUrl);
      message.success(" Added successfully!", 3).then(() => form.resetFields());
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
        <Form.Item name="imageUrl" label="Nup Image">
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

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button htmlType="submit" type="primary" disabled={btn}>
            Submit Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(null, mapDispatchToProps)(AboutImage);
