import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import BasicLayout from "../components/BasicLayout";
import axios from "axios";
import Product from "../components/Product";

const Homepage = () => {
  const [productData, serProductData] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        serProductData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllProducts();
  }, []);
  return (
    <BasicLayout>
      <Row>
        {productData.map((item) => (
          <Col xs={24} lg={6} md={12} sm={6}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </BasicLayout>
  );
};

export default Homepage;
