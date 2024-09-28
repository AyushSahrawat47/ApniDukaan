import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import './styles.css'

function ProductItem(props) {
  let { title, description, imageUrl, price, id } = props;


  return (
    <div>
      <div id="product">
        <div id="img">
            <img src={imageUrl} alt="just an image"/>
        </div>
        <div id="details">
            <h1>{title}</h1>
            <p>{description} </p>
        </div>
      </div>
      {/* <Card style={{ width: "18rem" }}>
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
      </Card> */}
    </div>
  );
}

export default ProductItem;
