import React from "react";
import { Layout, Typography, Select, List, Input } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import product from "../lotties/product.jpeg";

const { Content,  } = Layout;
const { Title } = Typography;
const { Option } = Select;
const { Search } = Input;
const Categories = ({ catName }) => (
  <div className="flex flex-row items-center mb3">
    <div>
      <CaretRightOutlined style={{ color: "#0C0474" }} />
    </div>
    <div className="ml2 pointer fw45" style={{ fontSize: "16px" }}>
      {catName}
    </div>
  </div>
);
const ProductTemplate = ({ name }) => {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-100">
        <div className=" w-60 pointer" style={{ height: "35vh" }}>
          <img
            src={product}
            alt="product"
            style={{ height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div classname="flex flex-column items-center justify-center w-40 ">
          <div
            className="fw6 pointer w-100 tc "
            style={{ fontSize: "16px", color: "#000000" }}>
            {name}
          </div>
          <div
            className="fw4 pointer w-100 tc mt1"
            style={{ fontSize: "16px", color: "#000000" }}>
            UGX 10000
          </div>
          <div
            className="white   pointer mt2 white tc pt2 pb2 pl3 pr3 fw7 hover-bg-dark-red Hbtn"
            style={{ backgroundColor: "#ff0000" }}>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
  { name: "NUP Shirts" },
];
const categories = [
  "Red Berets",
  "T-Shirts",
  "Our-Party",
  "Accessories",
  "Uncategorised",
];
const PhoneScreen = () => {
  return (
    <div>
      <div className="w-100 flex justify-center" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="w-90 mb4 mt4 fw7">
          <Title
            level={4}
            style={{ color: "#0C0474", fontWeight: "700", cursor: "default" }}>
            STORE
          </Title>
          <div style={{ color: "#0C0474", cursor: "default" }}>
            <span className="pointer" style={{ color: "#0C047460" }}>
              HOME/
            </span>
            STORE{" "}
          </div>
        </div>
      </div>
      <div className="w-100 flex justify-center">
        <div className="w-90">
          <Layout style={{ backgroundColor: "#FFFFFF" }}>
            <Content style={{ backgroundColor: "#FFFFFF" }}>
              <div className="w-100 pr2">
                <div className="w-100 flex flex-row justify-between mt5">
                  <div style={{ fontSize: "16px", cursor: "default" }}>
                    Showing all 50 products
                  </div>
                  <div className="">
                    <Select defaultValue="default" style={{ width: 180 }}>
                      <Option value="default">Default Sorting</Option>
                      <Option value="popularity">Sort by Popularity</Option>
                      <Option value="lowtohigh">Sort by Price: Low to High</Option>
                      <Option value="hightolow">Sort by Price: High to Low</Option>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="w-100 mt4 mb5">
                <List
                  style={{ paddingRight: "5px" }}
                  grid={{ gutter: [15, 40], column: 1 }}
                  dataSource={data}
                  pagination={{
                    showSizeChanger: true,
                    pageSize: 6,
                  }}
                  renderItem={(item) => (
                    <List.Item>
                      <ProductTemplate name={item.name} />
                    </List.Item>
                  )}
                />
              </div>
              <div className="w-100 mb5">
                <div
                  className="mt5 w-100  pt3 pb3 pl2 pr2"
                  style={{ backgroundColor: "#f6f6f6" }}>
                  <Search
                    placeholder="Search Product"
                    onSearch={(value) => console.log(value)}
                    enterButton
                  />
                </div>
                <div
                  className="mt4 w-100 pt3 pb3 pl3 pr2"
                  style={{ backgroundColor: "#f6f6f6" }}>
                  <div className="mb3">
                    <Title level={4} style={{ cursor: "default" }}>
                      Product Categories
                    </Title>
                  </div>
                  <div>
                    {categories.map((cat, index) => (
                      <Categories key={index} catName={cat} />
                    ))}
                  </div>
                </div>
                <div
                  className="mt4 w-100 pt3 pb3 pl3 pr2"
                  style={{ backgroundColor: "#f6f6f6" }}>
                  <div className="mb3">
                    <Title level={4} style={{ cursor: "default" }}>
                      Not Logged In
                    </Title>
                  </div>
                </div>
              </div>
            </Content>
          </Layout>
        </div>
      </div>
    </div>
  );
};
export default PhoneScreen;
