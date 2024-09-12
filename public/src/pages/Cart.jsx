import React, {useContext} from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const handleRemove = (item) => {
  }

  // const calculateTotal = () => {
  //   return cartItems
  //     .reduce((total, item) => total + item.price * item.quantity, 0)
  //     .toFixed(2);
  // };

  //useEffect for reloading cart
  

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2>Shopping Cart</h2>
            <ListGroup>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col md={6}>
                      <h5>{item.title}</h5>
                      <p>${item.price.toFixed(2)}</p>
                      {/* <p>Quantity: {item.quantity}</p> */}
                    </Col>
                    <Col md={4} className="text-end">
                      <h5>${(item.price /** {item.quantity}*/).toFixed(2)}</h5>
                      <Button onClick={()=>handleRemove(item.id)} variant="danger">Remove</Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            {cartItems.length > 0? 
            <div className="mt-3">
              {/* <h4>Total: ${calculateTotal()}</h4>  */}
              <Button variant="primary">Proceed to Checkout</Button>
            </div>
            : <h4>Cart is empty</h4>
            }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
