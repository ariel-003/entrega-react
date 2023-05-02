import React from 'react'
import { useState, useEffect} from 'react'
import './ItemListContainer.css'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { ItemList } from '../Itemlist/Itemlist'
import { useParams } from 'react-router-dom'

export const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams() 

    useEffect(() => {

        const asyncFunc = categoryId ? getProductsByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [categoryId])

    return (
        <div className="itemList--container">
            <p className="greeting">{greeting}</p>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer