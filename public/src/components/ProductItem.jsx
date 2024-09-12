import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductItem(props) {
  let { title, description, imageUrl, price, id } = props;


  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>${price}</strong>
          </Card.Text>
          <Link to={`/product/${id}`} >
            <Button variant="primary">
              view Details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductItem;
