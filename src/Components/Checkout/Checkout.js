import { useCartContext } from "../../Contexts/CartContext";
import CheckoutForm from "./CheckoutForm";
import * as OrdersService from "../../Services/OrdersService";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { LoaderContainer } from "./LoaderContainer";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartProducts, cartCounter, cartTotalPrice, disabledOrder, orderData, resetCartProducts, setDisabledOrder} = useCartContext()
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onCreateOrder = async (data) => {
    setLoading(true);
    await OrdersService.createOrder(data).then((order) => {
      setOrderId(order.id);
      setLoading(false);
      resetCartProducts();
      setDisabledOrder(true)
      setTimeout(() =>{
        navigate('/');
      }, 5000);
    })
  }

  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      {isLoading &&
        <LoaderContainer>
          <Loader/>
        </LoaderContainer>
      } 
      <div className="mt-3">
        <div className="card border-0">
          <div className="row">
              <div className="col-md-7 cart">
                  <div className="title">
                      <div className="row">
                          <div className="col text-center"><h4><b>Carrito de compras</b></h4></div>
                      </div>
                  </div>
                  {cartProducts.map((p) => (
                    <div key={p.product.id} className="row ms-2 mb-3 border-bottom">
                      <div className="row main align-items-center">
                        <div className="col-2"><img className="img-fluid" src={p.product.image_principal}></img></div>
                        <div className="col-8">
                            <div className="row text-muted fw-bold">{p.product.title}</div>
                            <div className="row mt-3 text-nowrap">{p.product.description}</div>
                        </div>
                        <div className="col-2">
                          <div className="fw-bolder">{p.amount}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="col-md-4 summary">
                  <div className="text-center"><h5><b>Resumen de compra</b></h5></div>
                  <hr></hr>
                  <div className="row">
                      <div className="col fw-bolder">Cantidad de items:</div>
                      <div className="col text-right">{cartCounter}</div>
                  </div>
                  <div className="row">
                      <div className="col fw-bolder">Precio total</div>
                      <div className="col text-right">${cartTotalPrice}</div>
                  </div>
                  <div className="row mt-5">
                    <CheckoutForm/>
                  </div>
                  <div className="row mt-5">
                    {orderId &&
                      <div  class="alert alert-info" role="alert">
                        <span> Muchas gracias por tu compra! Tu identificador de orden es: </span>
                        <span className="fw-bold">{orderId}</span>
                      </div>
                    }
                    <button onClick={async () => onCreateOrder(orderData)} disabled={disabledOrder} className="btn btn-success">
                      <i class="bi bi-bag"></i>
                      <span className="ms-1">Ordenar</span>
                    </button>
                    <span className="text-center">*Debes completar el formulario para poder ordenar</span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;