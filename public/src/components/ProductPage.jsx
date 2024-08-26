import React, {useContext} from 'react';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductPage = ({ product }) => {
  const {addToCart} = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart({
      title: product.title ,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price
    })
  }

  return (
    <Container className="my-5">
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.title} fluid />
        </Col>
        
        {/* Product Details */}
        <Col md={6}>
          <h1>{product.title}</h1>
          <p className="text-muted">{product.category}</p>

          {/* Description */}
          <p>{product.description}</p>

          {/* Price */}
          <h3 className="my-4">₹{product.price}</h3>

          {/* Quantity Selector */}
          {/* <Form.Group controlId="quantitySelect" className="my-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control as="select" value={quantity} onChange={()e}>
              {[...Array(10).keys()].map(x => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </Form.Control>
          </Form.Group> */}

          {/* Add to Cart Button */}
          <Button onClick={handleAddToCart} variant="primary" size="lg" block>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;

