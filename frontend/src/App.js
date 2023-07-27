import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import ProductCard from './ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array means the effect runs only once on mount

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Sellerkin Followup Reminder
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
