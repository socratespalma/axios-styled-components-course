import React from "react";

export default function ProductRow(product) {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>{category}</td>
      <img src={image} alt={title} />
      <td>{rating.rate}</td>
    </tr>
  );
}
