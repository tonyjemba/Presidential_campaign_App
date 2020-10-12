import React from "react";
import {Typography,Col} from "antd";
import event from "../../lotties/event.jpg";
const {Paragraph} = Typography;
const NewsCard =({span,fontSize}) =>{
    return(
        <Col className="gutter-row" span={span} >
        <div style={{ background: '#fbfbfb' }}>
          <div className="w-100 bg-red" style={{height:"30vh"}}>
            <img src={event} alt="news" style={{objectFit:"cover",objectPosition:"center",height:"100%"}}/>
          </div>
          <div className="w-100 mt2 mb2  fw7" >
            <div style={{color:"#ff0000",fontSize:`${fontSize}`}} className="pointer pl2">NUP</div>
          </div>
          <div className="fw7 pl2">
          <Paragraph ellipsis={{ rows: 2, expandable: false }} style={{color:"black", fontSize:`${fontSize}`}} >
            Today in history we are unveiling our new campaining website
          </Paragraph>
          </div>
          <div className="fw4 pl2" style={{ fontSize:`${fontSize}`}}> By Jemy Knd</div>
        </div>
      </Col>
    )
}
export default NewsCard;