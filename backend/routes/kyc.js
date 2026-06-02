import express from 'express';
const router = express.Router();

const kycStats = {
  pending: 1234,
  verified: 52000,
  rejected: 5678,
  suspended: 234
};

router.get('/stats', (req, res) => {
  res.json({
    success: true,
    data: kycStats,
    total: Object.values(kycStats).reduce((a, b) => a + b, 0),
    timestamp: new Date().toISOString()
  });
});

export default router;
