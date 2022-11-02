import React, { useState, useEffect } from "react";
// Import the `useQuery()` hook from Apollo Client
import { useQuery } from "@apollo/client";

import { Col, Row } from "antd";
import BasicLayout from "../components/BasicLayout";
// import axios from "axios";
import Product from "../components/Product";

// Import the query we are going to execute from its file
import { QUERY_PRODUCTS } from "../utils/queries";

const Homepage = () => {
  // const [productData, serProductData] = useState([]);

  // Execute the query on component load
  const { data } = useQuery(QUERY_PRODUCTS);

  // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
  const productData = data?.products || [];

  // useEffect(() => {
  //   const getAllProducts = async () => {
  //     try {
  //       const { data } = await axios.get("/api/products");
  //       serProductData(data);
  //       console.log(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getAllProducts();
  // }, []);

  return (
    <BasicLayout>
      <Row>
        {productData.map((products) => (
          <Col xs={24} lg={6} md={12} sm={6}>
            <Product item={products} />
          </Col>
        ))}
      </Row>
    </BasicLayout>
  );
};

export default Homepage;
