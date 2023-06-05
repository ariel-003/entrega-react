import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import * as ProductsService from "../../Services/ProductsService";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  let { categoryId } = useParams();
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const queryFilterArray = categoryId ? [{
        field: 'category',
        condition: '==',
        value: categoryId
      }] : null
      const products = await ProductsService.getProducts(queryFilterArray)
      setProducts(products);
      setLoading(false);
    }
    fetchProducts();
  }, [categoryId])

  if(isLoading) return (
    <Loader/>
  )

  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <div className="d-flex flex-grow-1 justify-content-center align-items-center">
        <Products
          products={products}
        ></Products>
      </div>
    </div>
  );
}

export default ItemListContainer;