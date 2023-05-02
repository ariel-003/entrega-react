
import { CartWidget } from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link className="logo" to={`/`}>
              <p>White Iron</p>
            </Link>
            <div className="header__links">
              <nav>
                  <ul className="nav__items">
                      <NavLink className="nav__items--links" to={`/category/Barras`}>Barras Olimpicas</NavLink>
                      <NavLink className="nav__items--links" to={`/category/Bumper`}>Bumper</NavLink>
                      <NavLink className="nav__items--links" to={`/category/Accesorios`}>Accesorios</NavLink>
                  </ul>
              </nav>
              <CartWidget />
            </div>
        </header>
      )
    }
    
export default NavBar