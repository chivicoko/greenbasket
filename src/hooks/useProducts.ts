import { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct, deleteAllProducts } from '@/utils/localStorageAPI';
import { Product } from '@/utils/types';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadedProducts = getProducts();
    setProducts(loadedProducts);
  }, []);

  const handleAddProduct = (product: Product) => {
    addProduct(product);
    setProducts(getProducts());
  };

  const handleUpdateProduct = (id: string, updatedProduct: Product) => {
    updateProduct(id, updatedProduct);
    setProducts(getProducts());
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    setProducts(getProducts());
  };

  const handleDeleteAllProducts = () => {
    deleteAllProducts();
    setProducts([]);
  };

  return {
    products,
    addProduct: handleAddProduct,
    updateProduct: handleUpdateProduct,
    deleteProduct: handleDeleteProduct,
    deleteAllProducts: handleDeleteAllProducts,
  };
};

export default useProducts;
