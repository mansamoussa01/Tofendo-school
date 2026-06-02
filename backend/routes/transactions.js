import express from 'express';
const router = express.Router();

const recentTransactions = [
  { id: 'TXN-001', user: 'Fatou Diallo', type: 'Transfer', amount: 500000, status: 'SUCCESS', time: '18:45', date: '2026-06-02' },
  { id: 'TXN-002', user: 'Mohamed Kone', type: 'Payment', amount: 250000, status: 'SUCCESS', time: '18:42', date: '2026-06-02' },
  { id: 'TXN-003', user: 'Aïssatou Bah', type: 'Withdrawal', amount: 1000000, status: 'PENDING', time: '18:40', date: '2026-06-02' },
  { id: 'TXN-004', user: 'Mamadou Sy', type: 'Deposit', amount: 750000, status: 'SUCCESS', time: '18:35', date: '2026-06-02' },
  { id: 'TXN-005', user: 'Hawa Diop', type: 'Currency', amount: 1000, status: 'SUCCESS', time: '18:30', date: '2026-06-02' }
];

router.get('/', (req, res) => {
  const limit = req.query.limit || 10;
  res.json({
    success: true,
    data: recentTransactions.slice(0, limit),
    total: recentTransactions.length,
    timestamp: new Date().toISOString()
  });
});

router.get('/:id', (req, res) => {
  const transaction = recentTransactions.find(t => t.id === req.params.id);
  if (!transaction) {
    return res.status(404).json({
      success: false,
      message: 'Transaction non trouvée'
    });
  }
  res.json({
    success: true,
    data: transaction,
    timestamp: new Date().toISOString()
  });
});

export default router;
