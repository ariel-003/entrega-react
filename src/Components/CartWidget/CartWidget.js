import { useCartContext } from "../../Contexts/CartContext";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function CartWidget(props) {
  const { cartCounter } = useCartContext();

  return (
    <Link style={{textDecoration: 'none'}} to={`/cart`}>
      <Button
        marginRight={props.marginRight}
        type="button"
        className="btn btn-light position-relative"
      >
        <i className="bi bi-cart"></i>
        <span className="position-absolute badge rounded-pill bg-danger">{cartCounter}</span>
      </Button>
    </Link>
  );
}

export default CartWidget;