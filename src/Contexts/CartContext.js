import { useEffect } from "react";
import { useContext } from "react";
import { createContext, useState, useMemo } from "react";

export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] =  useState(JSON.parse(localStorage.getItem("cartProducts")) ?? [])
    const [itemCounter, setItemCounter] = useState(0);
    const [disabledOrder, setDisabledOrder] = useState(true);
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
      setDisabledOrder(true);
      setOrderData({});
    }, [])

    const addCartProducts = (product, amount) => {
        const existentProduct = cartProducts.find((p) => p.product.id === product.id);
        if (existentProduct) {
            setCartProducts(cartProducts.map((p) => {
                if(p.product.id === product.id) {
                    return {
                        product: product,
                        amount: p.amount + amount
                    }
                }else{
                    return {
                        product,
                        amount
                    }
                }
            }))
        }else {
            setCartProducts([...cartProducts, ...[{product, amount}]]);
        }
    }

    const setCartProductsAmount = (product, amount) => {
      if(amount === 0) {
        setCartProducts(cartProducts.filter((p) => p.product.id !== product.id));
      } else {
        setCartProducts(cartProducts.map((p) => {
          if(p.product.id === product.id) {
            return {
              product: product,
              amount: amount
            }
          }else{
            return p;
          }
        }))
      }
    }

    const getProductsCouter = () => {
      return cartProducts.reduce((total, p) => total + p.amount, 0)
    }

    const getProductsTotalPrice = () => {
      return cartProducts.reduce((total, p) => total + p.amount*p.product.price, 0)
    }

    const resetCartProducts = () => {
      setCartProducts([]);
    }

    useMemo(() => localStorage.setItem("cartProducts", JSON.stringify(cartProducts)), [cartProducts]);

    return (
      <CartContext.Provider value={{ 
          itemCounter,
          cartCounter: getProductsCouter(),
          cartTotalPrice: getProductsTotalPrice(),
          cartProducts: cartProducts,
          disabledOrder: disabledOrder,
          orderData: orderData,
          setCartProductsAmount,
          addCartProducts,
          setItemCounter,
          setDisabledOrder,
          setOrderData,
          resetCartProducts
        }}>
        {children.map(c => c)}
      </CartContext.Provider>
    )
}