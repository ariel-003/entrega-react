import { Fragment } from "react";
import Product from "../Product/Product";

function Products(props) {
  return (
    <Fragment>
      {props.products.length > 0 ? (
        <div className="row">
          {props.products.map((product) => (
            <div key={product.id} className="col">
              <Product product={product}></Product>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Sin stock! - Lo sentimos mucho</p>
        </div>
      )}
    </Fragment>
  );
}

export default Products;