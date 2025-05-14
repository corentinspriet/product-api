// src/db.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect()
  .then(() => console.log('✅ Connexion PostgreSQL réussie !'))
  .catch(err => console.error('❌ Erreur de connexion PostgreSQL :', err));