import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  message,
  
} from 'antd'
import { connect } from 'react-redux'
import { addLiveVideoHeroImage } from '../Redux/Admin/Actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLiveVideoHeroImage: (image) => dispatch(addLiveVideoHeroImage (image))
  }
}

const LiveVideo = ({ addLiveVideoHeroImage }) => {
  
  const [LiveVideoHero, setLiveVideoHero] = useState({ youtubeID :""});
  const [form] = Form.useForm();

  
  
  const finished = () => {
      
    if (LiveVideoHero) {
      addLiveVideoHeroImage ({...LiveVideoHero});
      message.success(' Added successfully!', 3).then(
        () => form.resetFields()
      )
      setLiveVideoHero(null);
    
      return
    }  
    message.loading('Verification in progress..', 3)
    .then(() => message.info('Verified! Now try Again.', 3.5));
  }
  return (
                    <div className="mt4">
          <Form onFinish={finished} {...layout} form={form}>
                <Form.Item
                          name="youtubeID"
                          label="youtubeUrl"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the description!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input size="large" onChange={(e)=>setLiveVideoHero({youtubeID : e.target.value})} />
                        </Form.Item>
                        
                      
                        <Form.Item
                          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                          <Button
                            htmlType="submit"
                            type="primary"
                          >
                            Submit Changes
                          </Button>
                        </Form.Item>
                      </Form>
                    </div>
                 
  )
}

export default connect(null, mapDispatchToProps)(LiveVideo)
