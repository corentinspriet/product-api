import { useEffect, useState } from 'react';
import { getProducts } from '../services/api'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log('Produits chargés :', data);
        setProducts(data); // ✅ ici
      })
      .catch((error) => console.error('Erreur chargement produits :', error));
  }, []);

  return (
    <div>
      <h1>Produits</h1>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.name} - {p.price}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
