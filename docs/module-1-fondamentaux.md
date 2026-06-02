# Module 1: Fondamentaux React

## 📚 Table des matières

1. [JSX et Composants](#jsx-et-composants)
2. [Props](#props)
3. [État avec useState](#état-avec-usestate)
4. [Gestion d'Événements](#gestion-dévénements)

## JSX et Composants

### Qu'est-ce que React?

React est une bibliothèque JavaScript pour construire des interfaces utilisateur interactives.

### JSX

JSX vous permet d'écrire du HTML dans JavaScript:

```jsx
const element = <h1>Bonjour Monde</h1>;
```

### Composants

Les composants sont des fonctions qui retournent du JSX:

```jsx
function Welcome() {
  return <h1>Bienvenue!</h1>;
}

// Utilisation
return <Welcome />;
```

## Props

Les Props permettent de passer des données aux composants:

```jsx
function Greeting(props) {
  return <h1>Bonjour {props.name}!</h1>;
}

// Utilisation
return <Greeting name="Alice" />;
```

## État avec useState

L'état permet aux composants de changer:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Compte: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

## Gestion d'Événements

Gérez les événements utilisateur:

```jsx
function Button() {
  const handleClick = () => {
    alert('Bouton cliqué!');
  };
  
  return <button onClick={handleClick}>Cliquez-moi</button>;
}
```

---

**Continuez vers le Module 2!**