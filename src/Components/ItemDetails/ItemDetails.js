import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SlideShow from "../SlideShow/SlideShow";
import * as ProductsService from "../../Services/ProductsService";
import Loader from "../Loader/Loader";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";

function ItemDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setLoading] = useState(true);
  const { addCartProducts, itemCounter, setItemCounter } = useCartContext();
  const navigate = useNavigate();

  const addProducts = (product, itemCounter) => {
    addCartProducts(product, itemCounter);
    navigate(`/category/${product.category}`);
  }

  useEffect(() => {
    async function fetchProduct() {
      const product = await ProductsService.getProduct(id);
      setProduct(product);
      setLoading(false);
    }
    fetchProduct();
  }, [id])

  if(isLoading) return (
    <Loader/>
  )

  return (
    <div className="container mt-5 mb-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <SlideShow images={product.images}/>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">
                      {product.brand}
                    </span>
                    <h5 className="text-uppercase">{product.title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${product.price}</span>
                    </div>
                  </div>
                  <p className="about">{product.description}</p>

                  <div className="cart mt-4 align-items-center">
                    <div className="w-50 ms-0 mb-3">
                      <ItemCount 
                        postAdd={setItemCounter}
                        postSubstract={setItemCounter}
                        postChange={setItemCounter}
                      />
                    </div>
                    <button onClick={() => addProducts(product, itemCounter)} className="btn btn-danger text-uppercase mr-2 px-4">
                      Agregar al carrito
                    </button>
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;