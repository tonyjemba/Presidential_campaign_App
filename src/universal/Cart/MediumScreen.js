import React from "react";
import { Layout, Typography, InputNumber, List ,Button} from "antd";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IconContext } from "react-icons";
import product from "../../lotties/product.jpeg";

const { Content } = Layout;
const { Title } = Typography;

const CartItem = ({ productName }) => {
  return (
    <div className="w-100 flex flex-row justify-between items-center mb3 mt3">
      <div className="w-40 flex flex-row justify-between items-center">
        <div className="pointer">
          <IconContext.Provider
            value={{
              color: "black",
              size: "19px",
            }}>
            <div>
              <RiDeleteBin5Line />
            </div>
          </IconContext.Provider>
        </div>
        <div className="w-80 pointer" style={{ height: "35vh" }}>
          <img
            src={product}
            alt="product"
            style={{
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
      <div style={{ fontSize: "16px" }}>{productName}</div>
      <div style={{ fontSize: "16px" }}>
        <InputNumber
          min={1}
          defaultValue={1}
          onChange={(val) => console.log("changed", val)}
        />
      </div>
      <div style={{ fontSize: "16px" }}>UGX 10000</div>
    </div>
  );
};
const MediumScreen = () => {
  const data = ["Beret", "Shirts"];
  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={3}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            Cart
          </Title>
          <div className="pointer" style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            CHART
          </div>
        </div>
      </div>

      <Layout style={{ backgroundColor: "#ffffff" }}>
        <Content style={{ backgroundColor: "#ffffff" }}>
          <div className="w-100 flex justify-center mt5">
            <div className="w-90">
              <List
                dataSource={data}
                renderItem={(val) => (
                  <List.Item>
                    <CartItem productName={val} />
                  </List.Item>
                )}
                          />
                          <div className="w-100 flex flex-column justify-center mt5 mb5">
                              <div className="tc"><Title level={4}>Cart Total</Title></div>
                              <div className="tc mt2"><Title level={3}>UGX 20000</Title></div>
                              <div className="tc mt2"><Button ><div className="fw7">PROCEED TO CHECKOUT</div></Button></div>
                          </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default MediumScreen;
