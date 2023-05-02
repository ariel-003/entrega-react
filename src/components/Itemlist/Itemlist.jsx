import React from 'react'
import Item from '../Item/Item'
import './Itemlist.css'

export const ItemList = ({products}) => {
    return (
    <div className="listGroup">
        {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
    )
}

export default ItemList