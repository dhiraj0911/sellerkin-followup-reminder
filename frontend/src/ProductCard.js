// src/ProductCard.js
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import ReminderModal from './ReminderModal';

const ProductCard = ({ product }) => {
  const [showReminderModal, setShowReminderModal] = useState(false);

  const handleReminderButtonClick = () => {
    setShowReminderModal(true);
  };

  const closeModal = () => {
    setShowReminderModal(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1">Keywords Volume: {product.keywordsVolume}</Typography>
        <Button variant="contained" onClick={handleReminderButtonClick}>
          Set Followup Reminder
        </Button>
        {showReminderModal && <ReminderModal closeModal={closeModal} product={product} />}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
