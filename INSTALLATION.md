# 📦 Guide d'Installation - Tofendo School

## Prérequis

### Système d'exploitation
- Windows 10+
- macOS 10.15+
- Linux (Ubuntu 20+, Fedora 33+, etc.)

### Logiciels requis

#### 1. **Node.js & npm**

**Installation:**
- Visitez: https://nodejs.org/
- Téléchargez la version **LTS** (Long Term Support)
- Suivez le programme d'installation

**Vérification:**
```bash
node --version  # Devrait afficher v18.x.x ou plus
npm --version   # Devrait afficher 9.x.x ou plus
```

#### 2. **Git** (optionnel mais recommandé)

**Installation:**
- Visitez: https://git-scm.com/
- Téléchargez et installez

**Vérification:**
```bash
git --version
```

#### 3. **Un éditeur de code**

Recommandations:
- **VS Code** (gratuit, populaire): https://code.visualstudio.com/
- **WebStorm** (payant, professionnel): https://www.jetbrains.com/webstorm/
- **Sublime Text** (payant): https://www.sublimetext.com/

## Installation Étape par Étape

### Étape 1: Cloner le Repository

```bash
# Avec Git
git clone https://github.com/mansamoussa01/Tofendo-school.git
cd Tofendo-school

# Ou télécharger le ZIP depuis GitHub
# Puis décompresser et ouvrir le dossier
```

### Étape 2: Installer les Dépendances

```bash
# Accéder au dossier du projet principal
cd projects/tofendo-admin

# Installer les dépendances
npm install

# Ou avec yarn si vous l'utilisez
yarn install
```

**Durée estimée:** 2-5 minutes (dépend de votre connexion Internet)

### Étape 3: Vérifier l'Installation

```bash
# Vérifier que les dépendances sont bien installées
npm list

# Vous devriez voir:
# ├── react@18.2.x
# ├── react-dom@18.2.x
# ├── recharts@2.10.x
# ├── lucide-react@0.294.x
# ├── tailwindcss@3.3.x
# └── vite@5.0.x
```

### Étape 4: Lancer l'Application

```bash
# Démarrer le serveur de développement
npm run dev

# L'application devrait ouvrir automatiquement sur http://localhost:3000
# Sinon, ouvrez manuellement ce lien dans votre navigateur
```

### Étape 5: Se Connecter

**Identifiants de test:**
- Email: `admin@tofendo.gn`
- Mot de passe: `Admin@2026!Secure`
- Code OTP: `123456`

## 🎉 Vous êtes Prêt!

L'application est maintenant en cours d'exécution. Explorez le dashboard et commencez l'apprentissage!

## ⚙️ Configuration Avancée

### Changer le Port

Si le port 3000 est occupé, modifiez `vite.config.js`:

```javascript
server: {
  port: 3001,  // Nouveau port
  open: true
}
```

Puis relancez `npm run dev`

### Utiliser yarn au lieu de npm

```bash
# Installer yarn
npm install -g yarn

# Utiliser yarn
cd projects/tofendo-admin
yarn install
yarn dev
```

## 🐛 Dépannage

### Problème: "Port 3000 déjà utilisé"

**Solution 1:** Changer le port (voir section Configuration)

**Solution 2:** Tuer le processus

Windows:
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

macOS/Linux:
```bash
lsof -i :3000
kill -9 <PID>
```

### Problème: "npm ERR! code ENOENT"

**Cause:** Fichier `package.json` non trouvé

**Solution:** Vérifiez que vous êtes dans le bon dossier
```bash
cd projects/tofendo-admin
ls  # Vous devriez voir package.json
```

### Problème: "Modules not found"

**Cause:** Dépendances non installées

**Solution:** 
```bash
# Supprimer node_modules et réinstaller
rm -rf node_modules package-lock.json
npm install
```

### Problème: "Failed to compile"

**Cause:** Erreurs dans le code

**Solution:** Vérifiez la console pour les messages d'erreur spécifiques

## 📱 Ouvrir sur Votre Téléphone

1. Trouvez l'adresse IP de votre ordinateur:
   ```bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. Ouvrez le navigateur de votre téléphone et allez à:
   ```
   http://<votre-ip>:3000
   ```

## ✅ Checklist d'Installation

- [ ] Node.js et npm installés
- [ ] Repository cloné/téléchargé
- [ ] `npm install` exécuté avec succès
- [ ] `npm run dev` fonctionne sans erreurs
- [ ] L'application s'ouvre sur http://localhost:3000
- [ ] Vous pouvez vous connecter avec les identifiants de test

## 🚀 Prochaines Étapes

Une fois l'installation terminée:

1. Lire le **README.md** principal
2. Consulter **LEARNING-PATH.md** pour le parcours d'apprentissage
3. Explorer le code dans `projects/tofendo-admin/src/`
4. Commencer les **Exemples** dans le dossier `examples/`

## 💡 Conseils

- Gardez votre navigateur ouvert pendant le développement
- Les changements se rechargent automatiquement (Hot Reload)
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Consultez VS Code pour la coloration syntaxique et l'autocomplétion

## 📞 Besoin d'Aide?

Si vous rencontrez des problèmes:
1. Vérifiez la section **Dépannage** ci-dessus
2. Consultez les ressources: https://react.dev, https://vitejs.dev
3. Ouvrez une issue sur GitHub

---

**Prêt à commencer? Lancez `npm run dev` et explorez! 🎉**