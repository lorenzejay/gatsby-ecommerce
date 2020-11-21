import { Link } from "gatsby";
import React from "react";

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  return (
    <div>
      <h1>{product.title}</h1>

      <img
        src={product.images[0].originalSrc}
        style={{ width: 800, height: 500, objectFit: "cover" }}
        alt={product.title}
      />

      <div>{product.description}</div>
    </div>
  );
};

export default ProductTemplate;
