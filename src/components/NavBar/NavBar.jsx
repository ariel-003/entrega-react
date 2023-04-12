import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Barras Olimpicas</button>
                <button>Discos</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar