
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { connect } from "react-redux";
import { addHomeBlueSection } from "../Redux/Admin/Actions";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeBlueSection: (image) => dispatch(addHomeBlueSection(image)),
  };
};

const HomeBlueSection = ({ addHomeBlueSection }) => {
  const [HomeHeroHero, setHomeHeroHero] = useState(null);
  const [form] = Form.useForm();


  const finished = (values) => {
    setHomeHeroHero({ ...values,  });
    if (HomeHeroHero) {
      addHomeBlueSection(HomeHeroHero);
      message.success(" Added successfully!", 3).then(() => form.resetFields());
      setHomeHeroHero(null);
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
          name="Slogan"
          label="Slogan"
          rules={[
            {
              required: true,
              message: "Please enter a slogan.",
              whitespace: true,
            },
          ]}
        >
          <Input size="large" maxLength={35} />
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

export default connect(null, mapDispatchToProps)(HomeBlueSection);
