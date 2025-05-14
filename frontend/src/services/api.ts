export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/api/products');
  if (!response.ok) {
    throw new Error('Erreur API');
  }
  return response.json(); 
};
