import React, { useEffect } from "react";
import ProductsTable from "../components/ProductsTable";

const data = [
  {
    id: 1,
    title: "nike shoes",
    category: "shoes",
    price: 123,
    quantity: 1,
  },
  {
    id: 2,
    title: "nike shoes",
    category: "shoes",
    price: 123,
    quantity: 1,
  },
  {
    id: 3,
    title: "nike shoes",
    category: "shoes",
    price: 123,
    quantity: 1,
  },
  {
    id: 4,
    title: "nike shoes",
    category: "shoes",
    price: 123,
    quantity: 1,
  },
];

const Products = () => {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("data", data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="border border-">
      products page
      <ProductsTable data={data} />
    </div>
  );
};

export default Products;
