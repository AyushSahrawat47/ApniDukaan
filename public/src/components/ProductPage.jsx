import React, { useState } from 'react';
import ProductItem from './ProductItem';

const ProductPage = () => {

  const [product, setProduct] = useState([])

  const updateProducts = async()=>{
    const url = "http://localhost:5000/api/products/all-products";
    let data = await fetch(url);
    setProduct(data)
  }

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;

