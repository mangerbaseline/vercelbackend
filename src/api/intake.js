// src/api/intake.js
const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const intakeRoutes = require('../routes/intakeRoutes');

const app = express();

app.use(cors({
  origin: 'https://frontendn-ten.vercel.app/form',
  methods: ['GET','POST'],
  credentials: true,
}));

app.use(express.json());
app.use('/api/intake', intakeRoutes);
connectDB();

module.exports = serverless(app); 