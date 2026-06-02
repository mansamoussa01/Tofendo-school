# Module 2: Construire un Dashboard

## 📚 Table des matières

1. [Architecture](#architecture)
2. [Layout et Navigation](#layout-et-navigation)
3. [Cartes de Métriques](#cartes-de-métriques)
4. [Graphiques](#graphiques)

## Architecture

Un dashboard professionnel comprend:

- **Sidebar** - Navigation principale
- **Header** - Titre, notifications, profil
- **Main Content** - Contenu principal

```jsx
function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
```

## Layout et Navigation

Utilisez Tailwind pour la mise en page:

```jsx
function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white">
      <nav className="p-4 space-y-2">
        <a href="#" className="block p-2 hover:bg-gray-800">Dashboard</a>
        <a href="#" className="block p-2 hover:bg-gray-800">Utilisateurs</a>
        <a href="#" className="block p-2 hover:bg-gray-800">Transactions</a>
      </nav>
    </div>
  );
}
```

## Cartes de Métriques

Affichages des statistiques clés:

```jsx
function MetricCard({ label, value, icon }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-600">{label}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
      <div className="mt-4">{icon}</div>
    </div>
  );
}
```

## Graphiques

Avec Recharts:

```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function Chart() {
  const data = [
    { day: 'Lun', users: 100 },
    { day: 'Mar', users: 150 },
  ];
  
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="users" stroke="#3b82f6" />
    </LineChart>
  );
}
```

---

**Continuez vers le Module 3!**