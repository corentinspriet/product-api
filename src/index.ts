// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
