import express from 'express';
const router = express.Router();

const users = [
  { id: 1, name: 'Fatou Diallo', email: 'fatou@tofendo.gn', status: 'ACTIVE', balance: 500000 },
  { id: 2, name: 'Mohamed Kone', email: 'mohamed@tofendo.gn', status: 'ACTIVE', balance: 250000 },
  { id: 3, name: 'Aïssatou Bah', email: 'aissatou@tofendo.gn', status: 'ACTIVE', balance: 1000000 },
  { id: 4, name: 'Mamadou Sy', email: 'mamadou@tofendo.gn', status: 'INACTIVE', balance: 750000 },
  { id: 5, name: 'Hawa Diop', email: 'hawa@tofendo.gn', status: 'ACTIVE', balance: 350000 }
];

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: users,
    total: users.length,
    timestamp: new Date().toISOString()
  });
});

router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Utilisateur non trouvé'
    });
  }
  res.json({
    success: true,
    data: user,
    timestamp: new Date().toISOString()
  });
});

export default router;
