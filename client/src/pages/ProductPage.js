import React, { Fragment, useState } from 'react'
import BasicLayout from "../components/BasicLayout";
import { Input, Collapse, Space, Card, List, Button } from "antd";
import "./../styles/ProductPageLayout.css";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCT_BY_NAME } from "./../utils/queries";

const { Panel } = Collapse;
const { Search } = Input;

const ProductPage = () => {
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
    setProductName(name)
    console.log(name);
    console.log(productName);
    console.log(productByNameData);
  }

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
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              <div className="price">
                <div><b>Price: </b>
                </div>
                <Input
                  className="priceInput"
                  placeholder={item.price}
                  onChange={onChangePriceInput}
                />
              </div>
              <div className="stock">
                <div><b>Stock: </b>
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
    )
  }

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
    </BasicLayout>
  );
};

export default ProductPage;
