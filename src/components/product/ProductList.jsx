import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  console.log(products);
  return (
    <div>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((elem) => (
          <ProductCard key={elem.id} elem={elem} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;
