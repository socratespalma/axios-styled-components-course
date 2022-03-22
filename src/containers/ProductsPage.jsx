import React, { useEffect, useState } from "react";
import ProductRow from "../components/ProductRow";
import productServices from "../services/product/product.services";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // * with promises
    productServices.getProducts().then((data) => setProducts(data));

    // * with async/await
    // const fetchData = async () => {
    //   const res = await productServices.getProducts();
    //   setProducts(res);
    // };
    // fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} {...product} />
        ))}
      </tbody>
    </table>
  );
}
