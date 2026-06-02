import express from 'express';
const router = express.Router();

const VALID_CREDENTIALS = {
  email: 'admin@tofendo.gn',
  password: 'Admin@2026!Secure'
};

const VALID_OTP = '123456';
const activeSessions = new Map();

router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email et mot de passe requis'
      });
    }

    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      const tempToken = Math.random().toString(36).substring(2, 15);
      activeSessions.set(tempToken, {
        email,
        verified: false,
        createdAt: Date.now()
      });

      return res.json({
        success: true,
        message: 'Credentials valid. OTP verification required',
        tempToken,
        expiresIn: '5 minutes'
      });
    }

    res.status(401).json({
      success: false,
      message: 'Email ou mot de passe incorrect'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur serveur: ' + error.message
    });
  }
});

router.post('/verify-otp', (req, res) => {
  try {
    const { tempToken, otp } = req.body;

    if (!tempToken || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Token temporaire et OTP requis'
      });
    }

    const session = activeSessions.get(tempToken);
    if (!session) {
      return res.status(401).json({
        success: false,
        message: 'Token invalide ou expiré'
      });
    }

    if (otp !== VALID_OTP) {
      return res.status(401).json({
        success: false,
        message: 'Code OTP incorrect'
      });
    }

    const authToken = 'Bearer_' + Math.random().toString(36).substring(2, 15);
    activeSessions.set(authToken, {
      email: session.email,
      verified: true,
      createdAt: Date.now()
    });

    activeSessions.delete(tempToken);

    res.json({
      success: true,
      message: 'Authentification réussie',
      authToken,
      user: {
        email: session.email,
        name: 'Admin Tofendo',
        role: 'Administrator'
      },
      expiresIn: '7 days'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur serveur: ' + error.message
    });
  }
});

router.post('/logout', (req, res) => {
  try {
    const authToken = req.headers.authorization?.replace('Bearer ', '');
    
    if (authToken) {
      activeSessions.delete(authToken);
    }

    res.json({
      success: true,
      message: 'Déconnexion réussie'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur serveur: ' + error.message
    });
  }
});

router.get('/verify', (req, res) => {
  try {
    const authToken = req.headers.authorization?.replace('Bearer ', '');

    if (!authToken) {
      return res.status(401).json({
        success: false,
        message: 'Token manquant'
      });
    }

    const session = activeSessions.get(authToken);
    if (!session || !session.verified) {
      return res.status(401).json({
        success: false,
        message: 'Token invalide'
      });
    }

    res.json({
      success: true,
      message: 'Token valide',
      user: {
        email: session.email,
        name: 'Admin Tofendo',
        role: 'Administrator'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Erreur serveur: ' + error.message
    });
  }
});

export default router;
