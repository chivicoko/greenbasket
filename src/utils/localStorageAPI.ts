import { Product } from './types';

const PRODUCTS_KEY = 'products';

export const getProducts = (): Product[] => {
  if (typeof window !== 'undefined') {
    try {
      const products = localStorage.getItem(PRODUCTS_KEY);
      if (products) {
        return JSON.parse(products);
      }
    } catch (error) {
      console.error('Error parsing products from localStorage:', error);
    }
  }
  return [];
};

export const addProduct = (product: Product): void => {
  const products = getProducts();
  const updatedProducts = [...products, product];
  saveProducts(updatedProducts);
};

export const updateProduct = (id: string, updatedProduct: Product): void => {
  const products = getProducts();
  const updatedProducts = products.map(product =>
    product.id === id ? updatedProduct : product
  );
  saveProducts(updatedProducts);
};

export const deleteProduct = (id: string): void => {
  const products = getProducts();
  const updatedProducts = products.filter(product => product.id !== id);
  saveProducts(updatedProducts);
};

export const deleteAllProducts = (): void => {
  saveProducts([]);
};

const saveProducts = (products: Product[]): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
    }
  }
};
