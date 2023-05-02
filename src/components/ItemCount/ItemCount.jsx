import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1 ) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="counterWrapper">
            <div className="counter">
            <div className="counter__controls">
                <button className="counter__controls--button" onClick={decrement}>-</button>
                <h4 className="counter__controls--number">{quantity}</h4>
                <button className="counter__controls--button" onClick={increment}>+</button>
            </div>
            <div className="counter__add">
                <button className="counter__add--button" onClick={() => onAdd(quantity)} disabled={!stock}>Añadir al carrito</button>
            </div>
        </div>
        </div>
    )
}
