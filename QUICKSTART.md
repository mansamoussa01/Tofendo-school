# 🚀 QUICKSTART - Tofendo School

## ⚡ 3 Étapes pour Démarrer

### 1️⃣ Cloner le Repository

```bash
git clone https://github.com/mansamoussa01/Tofendo-school.git
cd Tofendo-school
```

### 2️⃣ Installer les Dépendances

```bash
# Backend
cd backend
npm install
cd ..

# Frontend
cd projects/tofendo-admin
npm install
cd ../..
```

### 3️⃣ Lancer les Serveurs

#### Terminal 1 - Backend (Port 5000)
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend (Port 3000)
```bash
cd projects/tofendo-admin
npm run dev
```

---

## 🌐 Accès à l'Application

```
🎨 Frontend:  http://localhost:3000
🔧 Backend:   http://localhost:5000
```

**Ouvrez** `http://localhost:3000` dans votre navigateur.

---

## 🔐 Identifiants de Test

```
Email:           admin@tofendo.gn
Mot de passe:    Admin@2026!Secure
Code OTP:        123456
```

---

## 📚 Architecture

```
Tofendo School/
├── backend/                    # API Node.js/Express (Port 5000)
│   ├── server.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── dashboard.js
│   │   ├── transactions.js
│   │   ├── users.js
│   │   ├── banks.js
│   │   └── kyc.js
│   └── package.json
│
├── projects/
│   └── tofendo-admin/          # React App (Port 3000)
│       ├── src/
│       └── package.json
│
└── docs/
    ├── README.md
    ├── INSTALLATION.md
    └── LEARNING-PATH.md
```

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/login`
- `POST /api/auth/verify-otp`
- `POST /api/auth/logout`
- `GET /api/auth/verify`

### Dashboard
- `GET /api/dashboard/metrics`
- `GET /api/dashboard/exchange-rates`
- `GET /api/dashboard/chart-data`
- `GET /api/dashboard/all`

### Resources
- `GET /api/transactions`
- `GET /api/users`
- `GET /api/banks`
- `GET /api/kyc/stats`

---

## 🧪 Tester le Backend avec cURL

```bash
# Vérifier l'état du serveur
curl http://localhost:5000/api/health

# Connexion
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@tofendo.gn","password":"Admin@2026!Secure"}'

# Obtenir les métriques
curl http://localhost:5000/api/dashboard/metrics
```

---

## ⚙️ Configuration

### Variables d'Environnement (.env)

```
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
JWT_SECRET=tofendo_secret_key_2026
JWT_EXPIRE=7d
```

---

## 🚨 Dépannage

### Port Occupé
```bash
# Trouver le processus
lsof -i :5000
# Tuer le processus
kill -9 <PID>
```

### Module Non Trouvé
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### CORS Error
Vérifiez que:
1. Backend s'exécute sur port 5000
2. Frontend sur port 3000
3. `.env` contient `CLIENT_URL=http://localhost:3000`

---

## 🌍 Déploiement

### Préparation Production

1. **Changer NODE_ENV**
   ```
   NODE_ENV=production
   ```

2. **Générer clé JWT sécurisée**
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

3. **Utiliser HTTPS**
   - Certificat SSL/TLS
   - Mise à jour du CLIENT_URL en HTTPS

4. **Base de données**
   - PostgreSQL/MongoDB
   - Migrations et seeders

5. **Déploiement**
   - **Heroku**: `git push heroku main`
   - **AWS/EC2**: Déploiement automatisé
   - **DigitalOcean**: App Platform
   - **Vercel** (Frontend): GitHub Integration

---

## 📖 Documentation Complète

- 📚 [README.md](README.md) - Vue d'ensemble
- 📦 [INSTALLATION.md](INSTALLATION.md) - Guide complet
- 🎓 [LEARNING-PATH.md](LEARNING-PATH.md) - Parcours d'apprentissage
- 🔗 [Repository GitHub](https://github.com/mansamoussa01/Tofendo-school)

---

## ✅ Checklist

- [ ] Repository cloné
- [ ] Backend installé (`npm install` dans backend/)
- [ ] Frontend installé (`npm install` dans projects/tofendo-admin/)
- [ ] Backend lancé (`npm run dev` dans backend/)
- [ ] Frontend lancé (`npm run dev` dans projects/tofendo-admin/)
- [ ] Accès à http://localhost:3000
- [ ] Connexion réussie avec identifiants de test
- [ ] Dashboard affiche les données

---

## 🎉 Vous Êtes Prêt!

**Prochaines étapes:**
1. Explorez le dashboard
2. Testez les endpoints API
3. Consultez LEARNING-PATH.md pour l'apprentissage
4. Modifiez le code et expérimentez!

---

**Besoin d'aide? Consultez la documentation complète ou ouvrez une issue sur GitHub! 🚀**
