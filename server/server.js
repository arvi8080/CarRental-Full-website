import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import User from './models/User.js';
import bcrypt from 'bcryptjs';
import { registerUser } from './controllers/userController.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send({ status: 'OK', message: 'RentCar API is running!' });
});

// Use user routes for /api/user
app.use('/api/user', userRoutes);

// Example Cars route
app.get('/api/cars', (req, res) => {
  res.json([
    { id: 1, brand: 'Toyota', model: 'Camry', year: 2022 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2021 },
  ]);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
