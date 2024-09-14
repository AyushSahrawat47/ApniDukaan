import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const addToCart = async () => {
    try{
      const response = await fetch (`http://localhost:5000/api/cart/add-to-cart/${id}`,{
        method: 'POST'
      });
      if(!response.ok){
        throw new Error('Failed to add the product please try after some time !!')
      }
      const result = await response.json();
      console.log('product added to cart', result);
      alert('Product added to cart successfully')
    }
    catch(err){
      console.error('Error :', err);
    }
  }

  // Fetch the product data based on the product ID passed via route params
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      console.log(data); // Log data to check response structure
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]); // Use `id` as the dependency

  if (!product) {
    return <p>404 Error occured </p>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <h1>This is Products Page</h1>
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Button variant="primary" className="mt-3" onClick={addToCart}>Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
