import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

import authRoutes from './routes/auth.js';
import dashboardRoutes from './routes/dashboard.js';
import transactionRoutes from './routes/transactions.js';
import usersRoutes from './routes/users.js';
import banksRoutes from './routes/banks.js';
import kycRoutes from './routes/kyc.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

app.use(cors({
  origin: CLIENT_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Tofendo Backend is running',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/banks', banksRoutes);
app.use('/api/kyc', kycRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

app.use((err, req, res, next) => {
  console.error('[ERROR]', err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`\n`);
  console.log(`╔════════════════════════════════════════════════╗`);
  console.log(`║  🚀 Tofendo Backend Server Started         ║`);
  console.log(`║                                            ║`);
  console.log(`║  📡 Server: http://localhost:${PORT}           ║`);
  console.log(`║  🌐 Client: ${CLIENT_URL}`);
  console.log(`║  ⚙️  Environment: ${process.env.NODE_ENV}`);
  console.log(`║                                            ║`);
  console.log(`║  API Endpoints:                            ║`);
  console.log(`║  - POST   /api/auth/login                  ║`);
  console.log(`║  - POST   /api/auth/verify-otp             ║`);
  console.log(`║  - GET    /api/dashboard/metrics           ║`);
  console.log(`║  - GET    /api/transactions                ║`);
  console.log(`║  - GET    /api/users                       ║`);
  console.log(`║  - GET    /api/banks                       ║`);
  console.log(`║  - GET    /api/kyc                         ║`);
  console.log(`║                                            ║`);
  console.log(`╚════════════════════════════════════════════════╝\n`);
});

export default app;
