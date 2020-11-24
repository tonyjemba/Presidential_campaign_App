import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  message,
  
} from 'antd'
import { connect } from 'react-redux'
import { addNewsVideoHeroImage } from '../Redux/Admin/Actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewsVideoHeroImage: (image) => dispatch(addNewsVideoHeroImage (image))
  }
}

const NewsVideo = ({ addNewsVideoHeroImage }) => {
  
  const [NewsVideoHero, setNewsVideoHero] = useState({ youtubeID :""});
  const [form] = Form.useForm();

  
  
  const finished = () => {
      
    if (NewsVideoHero) {
      addNewsVideoHeroImage ({...NewsVideoHero});
      message.success(' Added successfully!', 3).then(
        () => form.resetFields()
      )
      setNewsVideoHero(null);
    
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
                          label="youtubeID"
                          rules={[
                            {
                              required: true,
                              message: 'Please enter the description!',
                              whitespace: true,
                            },
                          ]}
                        >
                          <Input size="large" onChange={(e)=>setNewsVideoHero({youtubeID : e.target.value})} />
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

export default connect(null, mapDispatchToProps)(NewsVideo)
