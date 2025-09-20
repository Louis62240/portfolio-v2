
# Portfolio v2

Ce projet est un portfolio personnel développé avec Vue 3, TypeScript et Vite. Il inclut une configuration Docker et un workflow CI/CD GitHub Actions.

## Démarrage local

```bash
npm install
npm run dev
```

## Docker

Pour builder et lancer l'application :

```bash
docker build -t portfolio-v2 .
docker run -p 5173:5173 portfolio-v2
```

## CI/CD

Un workflow GitHub Actions build le projet et l'image Docker à chaque push sur `main`.
Une release GitHub est créée automatiquement lors d'un push de tag `v*`.

## Auteur
Louis62240
