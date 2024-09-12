import React,{useState, useEffect} from "react";
import ProductItem from "./ProductItem";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



const Products = () => {

  // this state hook fetches the product from api and stores them in itself 
  const [products, setProducts] = useState([])
  

  // Function to fetch products from the backend
  //might add a loading bar later
  const updateProducts = async () => {
    const url = 'http://localhost:5000/api/products/all-products';
    let data = await fetch(url);
    let parsedData = await data.json()
    // here the product are being stored in our product state 
    setProducts(parsedData);
  }

  // it will refetch the products whenever there is a change
  useEffect(() => {
    updateProducts();
    // eslint-disable-next-line
}, [])


  return (
    <Container className="mt-5" >
      <Row>
        {/* Products are fetch through map function which will iterate through each and every product inside our array which is coming through api */}
        {products.map((product) => (
          <Col key={product._id} md={4} className="mb-4">
            <ProductItem
              id={product._id}
              title={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
