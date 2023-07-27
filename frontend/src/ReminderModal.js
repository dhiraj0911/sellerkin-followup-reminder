// src/ReminderModal.js
import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const ReminderModal = ({ product, closeModal }) => {
  const [reminderDate, setReminderDate] = useState('');

  const handleSaveReminder = () => {
    axios
      .post('/api/reminders', { productId: product.id, reminderDate })
      .then((response) => {
          alert(response.data.message);
          closeModal();
      })
      .catch((error) => {
        // Handle network and other errors
        console.error('Error saving reminder:', error);
        alert('Failed to save reminder. Please try again.');
        closeModal();
      });
  };

  return (
    <Modal open={true} onClose={closeModal}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          minWidth: 300,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Set Followup Reminder for {product.title}
        </Typography>
        <TextField
          type="date"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
          fullWidth
          sx={{ my: 2 }}
        />
        <Button variant="contained" onClick={handleSaveReminder}>
          Save Reminder
        </Button>
        <Button onClick={closeModal} sx={{ ml: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default ReminderModal;
