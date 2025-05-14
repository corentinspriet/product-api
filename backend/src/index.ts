import express from 'express';
import cors from 'cors';  // Assure-toi d'importer cors ici
import { pool } from './db';  // Ou le fichier où tu as configuré ta base de données

const app = express();
const port = 3000;

// Utilise CORS globalement dans ton application
app.use(cors());  // Ajoute cette ligne pour activer CORS

app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
});

app.listen(port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${port}`);
});
