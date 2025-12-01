const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// Remove mongoose import since we're not using it in this simplified version
const contactRoutes = require('./routes/contactRoutes');
const careerRoutes = require('./routes/careerRoutes');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple in-memory storage for development
let contacts = [];
let applications = [];

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'WAStec Bio-Gas API is running!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/careers', careerRoutes);

// Simple endpoint to get all contacts (for testing)
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// Simple endpoint to get all applications (for testing)
app.get('/api/applications', (req, res) => {
  res.json(applications);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Note: Running in development mode without database');
});