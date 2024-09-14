import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link }from "react-router-dom"

const Cart = () => {
  const [cart, setCart] = useState([]);

  const fetchCart = async()=>{
    const response = await fetch("http://localhost:5000/api/cart/all-items")
    const data = await response.json()
    setCart(data)
  }

  const removeItem = async(id)=>{
    try{
      const response = await fetch (`http://localhost:5000/api/cart/remove-item/${id}`,{
        method: "DELETE",
      });
      if(response.ok){
        // Update the cart state after successfully removing the item
        setCart(cart.filter((item) => item._id !== id));
      }
      else{
        console.error("failed to remove item")
      }
    }
    catch(err){
      console.error('Error:',err)
    }
  }

  useEffect(()=>{
    fetchCart();
  },[])
  

  return (
    <>
      <Container>
        <Row>
        {cart.map((item) => (
            <Col key={item._id} md={4} className="mb-4">
              <h1>{item.name}</h1>
              <img src={item.imageUrl} alt={item.name} className="img-fluid" />
              <ListGroup.Item>{item.price}</ListGroup.Item>
              <Button onClick={()=>removeItem(item._id)}> Remove Item</Button>
            </Col>
          ))}
        <Button className="text-success">
          <Link to="/payment">Payment</Link>
        </Button>
        </Row>
      </Container>
    </>
  );
};

export default Cart;
