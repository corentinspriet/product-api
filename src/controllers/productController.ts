import { Request, Response } from 'express';
import { pool } from '../db';

type IdParam = { id: string };

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
};

export const addProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
      [name, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
};




export const updateProduct = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10); // bien converti en nombre
  console.log('Corps de la requête :', req.body);
  const { name, price } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *',
      [name, price, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Erreur lors de la mise à jour :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};





export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idNumber = parseInt(id);

  if (isNaN(idNumber)) {
    return res.status(400).json({ error: 'ID invalide' });
  }

  try {
    const result = await pool.query(
      'DELETE FROM products WHERE id = $1 RETURNING *',
      [idNumber]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }

    res.json({ message: 'Produit supprimé', produit: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur serveur');
  }
};