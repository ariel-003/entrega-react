import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name , img, price, stock}) => {
    return (               
        <article className="item">
            <header className="item__header">
                <img src={img} alt={name} className="item__header--img" />
            </header>
            <section className="item__section">
                <h2 className="item__title">{name}</h2>
                <p className="item__info">Precio: ${price}</p>
                <p className="item__info">Disponible: {stock}</p>
            </section>
            <footer className="item__footer">
                <Link to={`/item/${id}`} className="item__footer--option">
                    <p>Ver detalle</p>
                </Link>
            </footer>
        </article>
    )
}

export default Item