import React from "react";
import BasicLayout from "../components/BasicLayout";
import { Input, Collapse, Space } from "antd";
import "./../styles/ProductPageLayout.css";

const { Panel } = Collapse;
const { Search } = Input;

const ProductPage = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const onSearch = (value) => console.log(value);

  //   <div className="quantity">
  //   <p>Qty: </p>
  //   <Input className="quantityInput" placeholder="20" />
  // </div>
  // <div className="totalSold">
  //   <p>Total Sold: </p>
  //   <Input disabled={true} className="totalSoldInput" placeholder="40" />
  // </div>

  return (
    <BasicLayout>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Search
          className="searchBar"
          placeholder="Search for a product"
          onSearch={onSearch}
          enterButton
        />
        <Collapse defaultActiveKey={["1"]} onChange={onChange}>
          <Panel header="Clothes" key="1">
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel header="Tops" key="2">
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <div className="itemDiv">
                    <p className="itemName">Shirts</p>
                    <div className="quantity">
                      <p>Qty: </p>
                      <Input className="quantityInput" placeholder="20" />
                    </div>
                    <div className="totalSold">
                      <p>Total Sold: </p>
                      <Input
                        disabled={true}
                        className="totalSoldInput"
                        placeholder="40"
                      />
                    </div>
                  </div>
                  <div className="itemDiv">
                    <p className="itemName">T-shirts</p>
                    <div className="quantity">
                      <p>Qty: </p>
                      <Input className="quantityInput" placeholder="20" />
                    </div>
                    <div className="totalSold">
                      <p>Total Sold: </p>
                      <Input
                        disabled={true}
                        className="totalSoldInput"
                        placeholder="40"
                      />
                    </div>
                  </div>
                </Space>
              </Panel>
            </Collapse>
            <Collapse defaultActiveKey={["1"]} onChange={onChange}>
              <Panel header="Bottoms" key="2">
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ display: "flex" }}
                >
                  <div className="itemDiv">
                    <p className="itemName">Jeans</p>
                    <div className="quantity">
                      <p>Qty: </p>
                      <Input className="quantityInput" placeholder="20" />
                    </div>
                    <div className="totalSold">
                      <p>Total Sold: </p>
                      <Input
                        disabled={true}
                        className="totalSoldInput"
                        placeholder="40"
                      />
                    </div>
                  </div>
                  <div className="itemDiv">
                    <p className="itemName">Trousers</p>
                    <div className="quantity">
                      <p>Qty: </p>
                      <Input className="quantityInput" placeholder="20" />
                    </div>
                    <div className="totalSold">
                      <p>Total Sold: </p>
                      <Input
                        disabled={true}
                        className="totalSoldInput"
                        placeholder="40"
                      />
                    </div>
                  </div>
                </Space>
              </Panel>
            </Collapse>
          </Panel>
          <Panel header="Sports" key="3">
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <div className="itemDiv">
                <p className="itemName">Leggings</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
              <div className="itemDiv">
                <p className="itemName">Tank Tops</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
              <div className="itemDiv">
                <p className="itemName">Shoes</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
            </Space>
          </Panel>
          <Panel header="Jewellery" key="4">
            <Space
              direction="vertical"
              size="middle"
              style={{ display: "flex" }}
            >
              <div className="itemDiv">
                <p className="itemName">Necklace</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
              <div className="itemDiv">
                <p className="itemName">Rings</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
              <div className="itemDiv">
                <p className="itemName">Earings</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
              <div className="itemDiv">
                <p className="itemName">Wrist bands</p>
                <div className="quantity">
                  <p>Qty: </p>
                  <Input className="quantityInput" placeholder="20" />
                </div>
                <div className="totalSold">
                  <p>Total Sold: </p>
                  <Input
                    disabled={true}
                    className="totalSoldInput"
                    placeholder="40"
                  />
                </div>
              </div>
            </Space>
          </Panel>
        </Collapse>
      </Space>
    </BasicLayout>
  );
};

export default ProductPage;
