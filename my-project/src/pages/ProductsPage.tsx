import React from "react";
import { products } from "../data/products";

type Props = {};

const NewProductPage = (props) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
