Product API – Fullstack TypeScript App

Ce projet est une application fullstack réalisée dans le but de renforcer mes compétences en développement web moderne. Il comprend une API REST en TypeScript (Node.js + Express + PostgreSQL) ainsi qu’un frontend React (TypeScript + Vite) permettant d’afficher dynamiquement la liste des produits.

🎯 Objectif du projet

Ce projet a été conçu comme exercice d'autoformation pour :

Apprendre à concevoir une API REST avec Express & PostgreSQL

Manipuler TypeScript côté backend et frontend

Comprendre l’intégration frontend/backend avec React

Gérer un projet avec Git et structurer proprement le code

🧱 Stack technique

Backend

TypeScript

Node.js + Express

PostgreSQL

pg (node-postgres)

dotenv

CORS

Frontend

React

Vite

TypeScript

Axios

React Router DOM

🚀 Installation & lancement

1. Cloner le projet

git clone https://github.com/corentinspriet/product-api.git
cd product-api

2. Backend

cd backend
npm install
cp .env.example .env   # puis éditer le fichier .env avec vos infos PostgreSQL
npm run dev

La base de données attend une table products :

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL
);

3. Frontend

cd frontend
npm install
npm run dev

Frontend disponible sur http://localhost:5173

📆 Fonctionnalités

🔍 GET /api/products – Liste des produits

➕ POST /api/products – Ajouter un produit

✏️ PUT /api/products/:id – Modifier un produit

❌ DELETE /api/products/:id – Supprimer un produit

🖥️ Liste dynamique des produits côté frontend (avec React)

💡 Idées d'amélioration (roadmap)

Validation des inputs avec Zod ou Joi

Swagger pour documentation auto

Ajout d'une interface d’admin (CRUD complet côté UI)

Authentification avec JWT

Dockerisation du projet

📑 Ce que ce projet démontre

Capacité à structurer un projet TypeScript fullstack

Compréhension des appels API et de la communication client/serveur

Autonomie dans l’installation, la configuration et le debugging

Volonté de progresser et d’apprendre en dehors du cadre scolaire

🤝 Me contacter

Corentin Spriet📧 corentinspriet2@gmail.com