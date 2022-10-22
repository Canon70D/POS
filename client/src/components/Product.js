import { Card } from "antd";
import React from "react";

const Product = ({ item }) => {
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240, marginTop: 20, marginBottom: 20 }}
        cover={<img alt="example" src={item.image} />}
      >
        <Meta title={item.name} />
      </Card>
    </div>
  );
};

export default Product;
