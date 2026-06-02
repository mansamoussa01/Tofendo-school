# 📦 Scripts npm Globaux

Ces scripts permettent de gérer les deux serveurs facilement.

## Installation Globale

```bash
# Installer toutes les dépendances
npm run install:all
```

## Démarrage

```bash
# Démarrer les deux serveurs en production
npm start

# Démarrer les deux serveurs en développement
npm run dev
```

## Scripts Individuels

```bash
# Backend uniquement
npm run start:backend    # Production
npm run dev:backend      # Développement

# Frontend uniquement
npm run start:frontend   # Production
npm run dev:frontend     # Développement
```

---

**Note:** Ces scripts utilisent des connexions parallèles avec `&`. Si vous préférez des terminaux séparés, lancez manuellement:

```bash
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd projects/tofendo-admin && npm run dev
```
