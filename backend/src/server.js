import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import enquiryRoutes from './routes/enquiry.routes.js';
import {connectDB} from "./utils/db.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: 'https://workshop-cogk.vercel.app',
  methods: ['GET', 'POST'],
}));
app.use(express.json());


// Routes
app.use('/api/enquiry', enquiryRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
