import express from 'express';
const router = express.Router();

const banks = [
  { name: 'BDK', status: 'CONNECTED', uptime: '99.8%', transactions: 234567 },
  { name: 'BICIGUI', status: 'CONNECTED', uptime: '99.5%', transactions: 156789 },
  { name: 'Mastercard', status: 'CONNECTED', uptime: '99.9%', transactions: 345678 },
  { name: 'Stripe', status: 'CONNECTED', uptime: '99.7%', transactions: 123456 }
];

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: banks,
    total: banks.length,
    timestamp: new Date().toISOString()
  });
});

export default router;
