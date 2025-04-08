import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database
await connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));