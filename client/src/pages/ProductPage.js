import React, { Fragment, useState } from "react";
import BasicLayout from "../components/BasicLayout";
import {
  Input,
  Collapse,
  Space,
  Card,
  List,
  Button,
  Modal,
  Form,
  Select,
} from "antd";
import "./../styles/ProductPageLayout.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT_BY_NAME } from "./../utils/queries";

const { Panel } = Collapse;
const { Search } = Input;

const ProductPage = () => {
  const [popupModal, setPopupModal] = useState(false);
  const [productName, setProductName] = useState(0);

  const { data: QUERY_PRODUCT_BY_NAME_DATA } = useQuery(QUERY_PRODUCT_BY_NAME, {
    variables: { name: productName },
  });

  const productByNameData = QUERY_PRODUCT_BY_NAME_DATA?.products || [];

  const onChange = (key) => {
    console.log(key);
  };

  const onChangeStockInput = (e) => {
    console.log(e.target.value);
  };
  const onChangePriceInput = (e) => {
    console.log(e.target.value);
  };

  const onSearch = async function (name) {
    setProductName(name);
    console.log(name);
    console.log(productName);
    console.log(productByNameData);
  };

  const onClickUpdateButton = (e) => {
    console.log("Clicked update button");
  };

  const SearchList = () => {
    return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={productByNameData}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>
              <div className="price">
                <div>
                  <b>Price: </b>
                </div>
                <Input
                  className="priceInput"
                  placeholder={item.price}
                  onChange={onChangePriceInput}
                />
              </div>
              <div className="stock">
                <div>
                  <b>Stock: </b>
                </div>
                <Input
                  className="stockInput"
                  placeholder={item.stock}
                  onChange={onChangeStockInput}
                />
              </div>
              <Button
                // disabled={true}
                className="updateButton"
                type="primary"
                onClick={onClickUpdateButton}
              >
                Update
              </Button>
            </Card>
          </List.Item>
        )}
      />
    );
  };

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
        <SearchList />
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

      {/* a button and a pop modal for add new product, need to be fixed to useMusation to save data to db, need a function for form when onFinish */}
      <Button type="primary" onClick={() => setPopupModal(true)}>
        Add Product
      </Button>
      <Modal
        title={"Add New Product"}
        visible={popupModal}
        onCancel={() => {
          setPopupModal(false);
        }}
        footer={false}
      >
        <Form layout="vertical">
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price">
            <Input />
          </Form.Item>
          <Form.Item name="stock" label="Stock">
            <Input />
          </Form.Item>
          <Form.Item name="image" label="Image URL">
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Category">
            <Select>
              <Select.Option value="apparel">Apparel</Select.Option>
              <Select.Option value="sneakers">Sneakers</Select.Option>
              <Select.Option value="accessories">Accessories</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="subcategory" label="subcategory">
            <Select>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
              <Select.Option value=""></Select.Option>
            </Select>
          </Form.Item>
          <div className="d-flex justify-content-end">
            <Button type="primary" htmlType="submit">
              SAVE
            </Button>
          </div>
        </Form>
      </Modal>
    </BasicLayout>
  );
};

export default ProductPage;
