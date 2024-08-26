import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from './ProductPage';

const ProductCategoryWrapper = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const url = `http://localhost:5000/api/products/${category}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      setProduct(parsedData);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return <ProductPage product={product} />;
};

export default ProductCategoryWrapper;
