import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

function Product(props) {
  return (
    <Link style={{textDecoration: 'none'}} to={`/item/${props.product.id}`}>
      <Card className="card shadow-lg" style={{ width: "18rem" }}>
        <img
          src={props.product.image_principal}
          alt={props.product.id}
          className="card-img-top"
        />
        <div className="card-body text-center">
          <h5 className="title card-title">{props.product.title}</h5>
          <p className="card-text">{props.product.description}</p>
          <p className="price card-text"> $ {props.product.price}</p>
        </div>
      </Card>
    </Link>
  );
}

export default Product;