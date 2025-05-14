//import express from 'express';
import express, { RequestHandler } from 'express';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
} from '../controllers/productController';

const router = express.Router();

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products/:id', updateProduct as RequestHandler);
router.delete('/products/:id', deleteProduct as RequestHandler);


export default router;
