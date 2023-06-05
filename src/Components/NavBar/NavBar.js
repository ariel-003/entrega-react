import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Contexts/CartContext";

function NavBar() {
  const { cartCounter } = useCartContext();
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mb-0 h1" href="/">
          STRONG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/category/barras">
                Barras
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/category/discos">
                Discos
              </Link>
            </li>
          </ul>
          <CartWidget marginRight="30px" />
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;