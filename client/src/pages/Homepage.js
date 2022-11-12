//code to test add to cart, can switch back to other half
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import BasicLayout from "../components/BasicLayout";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import { QUERY_PRODUCTS } from "../utils/queries";

const Homepage = () => {
  // const [productData, serProductData] = useState([]);
  const navigate = useNavigate();
  const { cartProducts } = useSelector((state) => state.rootReducer);

  const { data } = useQuery(QUERY_PRODUCTS);
  console.log(data);
  const productData = data?.products || [];

  return (
    <BasicLayout>
      <div
        className="cart-item d-flex jusitfy-content-space-between flex-row"
        onClick={() => navigate("/cart")}
      >
        <p>{cartProducts.length}</p>
        <ShoppingCartOutlined />
      </div>
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

//==========================================================

// import React, { useState, useEffect } from "react";
// // Import the `useQuery()` hook from Apollo Client
// import { useQuery } from "@apollo/client";

// import { Col, Row } from "antd";
// import BasicLayout from "../components/BasicLayout";
// // import axios from "axios";
// import Product from "../components/Product";

// // Import the query we are going to execute from its file
// import { QUERY_PRODUCTS } from "../utils/queries";

// const Homepage = () => {
//   // const [productData, serProductData] = useState([]);

//   // Execute the query on component load
//   const { data } = useQuery(QUERY_PRODUCTS);

//   // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
//   const productData = data?.products || [];

//   // useEffect(() => {
//   //   const getAllProducts = async () => {
//   //     try {
//   //       const { data } = await axios.get("/api/products");
//   //       serProductData(data);
//   //       console.log(data);
//   //     } catch (err) {
//   //       console.log(err);
//   //     }
//   //   };
//   //   getAllProducts();
//   // }, []);

//   const [itemSelected, setItemSelected] = useState("Hey");

//   return (
//     <BasicLayout hello={itemSelected}>
//       {/* <Row>
//         {productData.map((products) => (
//           <Col xs={24} lg={6} md={12} sm={6}>
//             <Product item={products} />
//           </Col>
//         ))}
//       </Row> */}

//       <div>
//         {/* Conditional (ternary) operator is checking to see if itemSelected is not an empty string. If so render the following: */}
//         {itemSelected != "" ? (
//           <div>
//             <h3>You picked an item</h3>
//           </div>
//         ) : (
//           // If user has not selected any item yet
//           <div>
//             <h3>There is no items selected yet.</h3>
//             <h3>Please pick an item from the list on the left.</h3>
//           </div>
//         )}
//       </div>
//     </BasicLayout>
//   );
// };

// export default Homepage;
