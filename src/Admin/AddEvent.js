import React, { useState } from 'react'
import {
  Form,
  Input,
  DatePicker,
  Button,
  message,
  Progress,
} from 'antd'
import { connect } from 'react-redux';
import { addEvent } from '../Redux/Admin/Actions';
import firebase from '../base'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (event) => dispatch(addEvent(event))
  }
}

const AddEvent = ({ addEvent }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [Event, setEvent] = useState(null);
  const [btn, setBtn] = useState(true);
  const [form] = Form.useForm();

  
  const onFileChange = (e) => {
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child("images/" + file.name);
    const uploadTask = fileRef.put(file)

    uploadTask.on(
      'state_changed',
      (snapshot) =>  {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
      (e) => {
        console.log(e)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          setImageUrl({ photoUrl: url })
          setBtn(false)
        })
      },
    )
  }
 
  
  const finished = (values) => {
    setEvent({ ...values, Date: values.Date._d, ...imageUrl })
    if (!btn && Event) {
      addEvent(Event);
      message.success('Event Has been added successfully!', 3).then(
        () => form.resetFields()
      )
      setEvent(null);
      setImageUrl(null);
      setProgress(0);
      setBtn(true);
      return
    }  
    message.loading('Verification in progress..', 3)
    .then(() => message.info('Verified! Now try Again.', 3.5));
  }
  return (
                    <div className="mt4">
                      <Form onFinish={finished} {...layout} form={form}>
                        <Form.Item
                          name="Title"
                          label="Title"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the Title!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item
                          name="Location"
                          label="Location"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the Location!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input size="large" />
                        </Form.Item>
                        <Form.Item name="Date" label="Date">
                          <DatePicker showTime />
                        </Form.Item>
                        <Form.Item
                          name="photoUrl"
                          label="Photo"
                        >
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                           
                          />
                          <div className="w-100">
                               {progress !== 0 ? <Progress percent={progress}  status={`${progress==100?"success":"active"}`}  size="small"   strokeColor={{'0%': '#000080', '100%': '#ff0000',}}/>: null }
                          </div>
                        </Form.Item>
                        <Form.Item
                          label="Detail"
                          name="Detail"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the some Details!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input.TextArea rows={6} />
                        </Form.Item>
                        <Form.Item
                          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                          <Button
                            htmlType="submit"
                            type="primary"
                            disabled={btn}
                          >
                            Add Event
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                 
  )
}

export default connect(null, mapDispatchToProps)(AddEvent)
