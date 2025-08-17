const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { spawn } = require('child_process');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Production CORS settings
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'SAHI DAAM API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Mock products endpoint
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Fresh Tomatoes',
      vendor: 'Sharma Vegetables',
      initialPrice: 40.00,
      quantity: 10,
      soldQuantity: 3,
      listedAt: new Date(new Date().getTime() - 24 * 3600 * 1000),
      expiryAt: new Date(new Date().getTime() + 48 * 3600 * 1000),
      rating: 4.5,
      vendorRating: 4.8,
      location: 'Greater Noida, Uttar Pradesh',
      category: 'Vegetables',
      coordinates: { lat: 28.4744, lng: 77.5040 },
      address: 'Sector Alpha, Greater Noida, UP'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      vendor: 'Gupta Bakery',
      initialPrice: 50.00,
      quantity: 15,
      soldQuantity: 8,
      listedAt: new Date(),
      expiryAt: new Date(new Date().getTime() + 24 * 3600 * 1000),
      rating: 4.2,
      vendorRating: 4.6,
      location: 'Greater Noida, Uttar Pradesh',
      category: 'Bakery',
      coordinates: { lat: 28.4844, lng: 77.5140 },
      address: 'Sector Beta, Greater Noida, UP'
    },
    {
      id: 3,
      name: 'Fresh Milk',
      vendor: 'Daily Dairy Co.',
      initialPrice: 60.00,
      quantity: 20,
      soldQuantity: 15,
      listedAt: new Date(new Date().getTime() - 12 * 3600 * 1000),
      expiryAt: new Date(new Date().getTime() + 12 * 3600 * 1000),
      rating: 4.7,
      vendorRating: 4.9,
      location: 'Noida, Uttar Pradesh',
      category: 'Dairy',
      coordinates: { lat: 28.5355, lng: 77.3910 },
      address: 'Sector 62, Noida, UP'
    }
  ];
  
  res.json(products);
});

// Voice processing endpoint
app.post('/api/process-voice', async (req, res) => {
  try {
    // Mock voice processing for production
    const { audioData } = req.body;
    
    if (!audioData) {
      return res.status(400).json({ error: 'No audio data provided' });
    }
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response
    const mockResponses = [
      {
        transcription: "Amul ka butter 10 packet 10 rupaye ka 4 din bad expire hoga",
        productName: "Amul Butter",
        quantity: "10 packets",
        price: 10,
        expiryDays: 4,
        confidence: 95.5
      },
      {
        transcription: "Mother Dairy ka full cream milk 2 packet 25 rupaye ka aaj expire",
        productName: "Mother Dairy Full Cream Milk",
        quantity: "2 packets",
        price: 25,
        expiryDays: 0,
        confidence: 92.3
      }
    ];
    
    const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    
    res.json({
      success: true,
      ...randomResponse
    });
    
  } catch (error) {
    console.error('Voice processing error:', error);
    res.status(500).json({ 
      error: 'Voice processing failed',
      message: error.message 
    });
  }
});

// Add product endpoint
app.post('/api/products', (req, res) => {
  try {
    const { productName, quantity, unit, price, expiryDate } = req.body;
    
    if (!productName || !quantity || !expiryDate) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }
    
    const newProduct = {
      id: Date.now(),
      name: productName,
      vendor: 'Your Store',
      initialPrice: price || 50.00,
      quantity: parseInt(quantity),
      soldQuantity: 0,
      listedAt: new Date(),
      expiryAt: new Date(expiryDate),
      rating: 4.0,
      vendorRating: 4.0,
      location: 'Greater Noida, Uttar Pradesh',
      category: 'General',
      coordinates: { lat: 28.4744, lng: 77.5040 },
      address: 'Your Location, Greater Noida, UP'
    };
    
    res.status(201).json({
      success: true,
      product: newProduct,
      message: 'Product added successfully'
    });
    
  } catch (error) {
    console.error('Add product error:', error);
    res.status(500).json({ 
      error: 'Failed to add product',
      message: error.message 
    });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 SAHI DAAM Production API running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
