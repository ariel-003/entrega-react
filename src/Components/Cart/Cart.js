import { useCartContext } from "../../Contexts/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Cart() {
  const { cartProducts, cartCounter, cartTotalPrice, setCartProductsAmount } = useCartContext()
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <div className="mt-3">
        <div className="card border-0">
          <div className="row">
              <div className="col-md-7 cart">
                  <div className="title">
                      <div className="row">
                          <div className="col text-center"><h4><b>Carrito de compras</b></h4></div>
                      </div>
                  </div>
                  {cartProducts.length > 0 ? (
                    <div className="row ms-2">
                      {cartProducts.map((p) => (
                        <div key={p.product.id} className="row mb-3 border-bottom">
                            <div className="row main align-items-center">
                                <div className="col-2"><img  className="img-fluid" src={p.product.image_principal} alt="Producto"></img></div>
                                <div className="col-3">
                                    <div className="row text-muted fw-bold">{p.product.title}</div>
                                    <div className="row mt-3 text-nowrap">{p.product.description}</div>
                                </div>
                                <div className="col-3">
                                  <ItemCount
                                    postAdd={setCartProductsAmount}
                                    postSubstract={setCartProductsAmount}
                                    postChange={setCartProductsAmount}
                                    counter={p.amount}
                                    args={[p.product]} 
                                  />
                                </div>
                                <div className="col-4 d-flex justify-content-between">
                                  <div>${p.amount*p.product.price}</div>
                                  <div>
                                    <button onClick={() => {setCartProductsAmount(p.product, 0)}} className="btn btn-dark"> <i className="bi bi-trash"></i></button> 
                                  </div>
                                </div>
                            </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <p>No hay productos en el carrito</p>
                    </div>
                  )}
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
                    <Link disabled={cartCounter > 0} className={`btn btn-success ${cartCounter === 0 ? 'disabled' : ''}`} to={`/checkout`}>
                      <i class="bi bi-cart-check"></i>
                      <span className="ms-1">Checkout</span>
                    </Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;