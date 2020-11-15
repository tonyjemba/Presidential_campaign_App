import React, { useState } from "react";
import { Form, Input, Button, message,  } from "antd";
import { connect } from "react-redux";
import { addHomeShortNotes } from "../Redux/Admin/Actions";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeShortNotes: (image) => dispatch(addHomeShortNotes(image)),
  };
};

const ShortNotes = ({ addHomeShortNotes }) => {
  const [ShortNotes, setShortNotes] = useState(null);
  const [form] = Form.useForm();


  const finished = (values) => {
    setShortNotes({ ...values });
    if (ShortNotes) {
      addHomeShortNotes(ShortNotes);
      message.success(" Added successfully!", 3).then(() => form.resetFields());
      setShortNotes(null);
      return;
    }
    message
      .loading("Verification in progress..", 3)
      .then(() => message.info("Verified! Now try Again.", 3.5));
  };
  return (
    <div className="mt4">
      <Form onFinish={finished} {...layout} form={form}>
        <Form.Item
          name="Heading"
          label="Heading"
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
          label="Content"
          name="Content"
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
          <Button htmlType="submit" type="primary" >
            Submit Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(ShortNotes);
