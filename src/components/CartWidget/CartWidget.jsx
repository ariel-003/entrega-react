import React from 'react'
import cart from './assets/cart.svg'

export const CartWidget = () => {
    return (
    <div className="cart">
        <div className="cart--container">
            <img src={cart} alt="cart icon" />
            <p className="cart__counter">0 productos</p>
        </div>
    </div>
    )
}