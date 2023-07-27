const express = require('express');
const cors = require('cors'); // Add the cors middleware
const app = express();
const port = 5000;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const dummyProducts = [
  { id: 1, title: 'Product 1', category: 'Electronics', keywordsVolume: 100, reminderDate: "2023-08-01" },
  { id: 2, title: 'Product 2', category: 'Clothing', keywordsVolume: 200, reminderDate: null },
  { id: 3, title: 'Product 3', category: 'Home & Kitchen', keywordsVolume: 150, reminderDate: null },
  { id: 4, title: 'Product 4', category: 'Toys & Games', keywordsVolume: 180, reminderDate: null },
  { id: 5, title: 'Product 5', category: 'Sports & Outdoors', keywordsVolume: 220, reminderDate: null },
  { id: 6, title: 'Product 6', category: 'Beauty & Personal Care', keywordsVolume: 120, reminderDate: null },
  { id: 7, title: 'Product 7', category: 'Books', keywordsVolume: 300, reminderDate: null },
  { id: 8, title: 'Product 8', category: 'Pet Supplies', keywordsVolume: 250, reminderDate: null },
  { id: 9, title: 'Product 9', category: 'Automotive', keywordsVolume: 180, reminderDate: null },
  { id: 10, title: 'Product 10', category: 'Health & Household', keywordsVolume: 350, reminderDate: null },
  { id: 11, title: 'Product 11', category: 'Electronics', keywordsVolume: 180, reminderDate: null },
];

// GET endpoint to fetch dummyProducts
app.get('/api/products', (req, res) => {
  return res.status(200).json(dummyProducts);
});

app.post('/api/reminders', (req, res) => {
  const { productId, reminderDate } = req.body;

  // Find the product in the dummyProducts array with the given ID
  const productToUpdate = dummyProducts.find((product) => product.id === productId);

  if (!productToUpdate) {
    return res.status(404).json({ error: 'Product not found' });
  }

  // Update the reminderDate for the product
  productToUpdate.reminderDate = reminderDate;

  return res.status(201).json({ message: 'Reminder saved successfully' });
});

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  return res.status(500).json({ error: 'Something went wrong' });
};

// app.use(ex)

// Add the error handling middleware
app.use(errorHandler);

// Start the serve
app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000`);
});
