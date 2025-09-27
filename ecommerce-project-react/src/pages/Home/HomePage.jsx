import axios from 'axios'
import { useState, useEffect } from 'react';
import { Header } from "../../components/Header";
import './HomePage.css';
import { ProductsGrid } from './ProductGrid';

export function HomePage() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProductData = async()=> {
    const response = await axios.get('http://localhost:3000/api/products');
    setProducts(response.data);
  }
  fetchProductData();
  }, [])
  return (
    <>
    <title>E-commerce Web</title>
      <Header />
      <div className="home-page">
        < ProductsGrid products = {products} /> 
      </div>
    </>
  );
}
