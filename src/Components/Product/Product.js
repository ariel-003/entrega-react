import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

function Product(products) {
  return ( products.map(product => 
    <Link style={{textDecoration: 'none'}} to={`/item/${product.id}`}>
      <Card className="card shadow-lg" style={{ width: "18rem" }}>
        <img
          src={product.image_principal}
          alt={product.id}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h5 className="title card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="price card-text"> $ {product.price}</p>
        </div>
      </Card>
    </Link>
  )
  );
}

export default Product;