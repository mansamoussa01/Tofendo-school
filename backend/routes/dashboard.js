import express from 'express';
const router = express.Router();

const dashboardData = {
  metrics: {
    activeUsers: 5234891,
    transactions24h: 1234567,
    volume24h: 85400000000,
    revenue24h: 1280000000
  },
  exchangeRates: {
    usdGnf: 8500,
    eurGnf: 9200,
    usdEur: 1.08
  },
  chartData: [
    { day: 'Lun', users: 4200, transactions: 900000, revenue: 1.1 },
    { day: 'Mar', users: 4500, transactions: 950000, revenue: 1.15 },
    { day: 'Mer', users: 4800, transactions: 1000000, revenue: 1.2 },
    { day: 'Jeu', users: 5100, transactions: 1100000, revenue: 1.25 },
    { day: 'Ven', users: 5300, transactions: 1200000, revenue: 1.28 },
    { day: 'Sam', users: 5200, transactions: 1150000, revenue: 1.22 },
    { day: 'Dim', users: 5234, transactions: 1234567, revenue: 1.28 }
  ]
};

router.get('/metrics', (req, res) => {
  res.json({
    success: true,
    data: dashboardData.metrics,
    timestamp: new Date().toISOString()
  });
});

router.get('/exchange-rates', (req, res) => {
  res.json({
    success: true,
    data: dashboardData.exchangeRates,
    timestamp: new Date().toISOString()
  });
});

router.get('/chart-data', (req, res) => {
  res.json({
    success: true,
    data: dashboardData.chartData,
    timestamp: new Date().toISOString()
  });
});

router.get('/all', (req, res) => {
  res.json({
    success: true,
    data: dashboardData,
    timestamp: new Date().toISOString()
  });
});

export default router;
