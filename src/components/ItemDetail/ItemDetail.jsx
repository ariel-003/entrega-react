import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ( props ) => {

    const { id, name, img, category, description, price, stock } = props

    return (
        <article className="itemDetail">
            <header className="itemDetail__header">
                <img  className="itemDetail__header--img" src={props.img} alt={props.name} />
            </header>
            <section className="itemDetail__section">
                <h2 className="itemDetail__title">{props.name}</h2>
                <p className="itemDetail__info">Categoría: {props.category}</p>
                <p className="itemDetail__info">Descripción: {props.description}</p>
                <p className="itemDetail__info">Precio: ${props.price}</p>
            </section>
            <footer className="itemDetail__footer">
                <ItemCount initial={1} stock={props.stock} onAdd={(quantity) => console.log('Cantidad agregada: ', quantity)}/>
            </footer>
        </article>
    )
}