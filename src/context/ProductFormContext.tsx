'use client';

import { Product2 } from '@/utils/types';
import { createContext, useContext, useEffect, useState } from 'react';

interface ProductFormContextType {
  productInfo: Product2 | null;
  saveProductInfo: (product: Product2) => void;
  dropProductInfo: () => void;
}

const ProductFormContext = createContext<ProductFormContextType | undefined>(undefined);

export const ProductFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productInfo, setProductInfo] = useState<Product2 | null>(null);

  useEffect(() => {
    const storedProductInfo = localStorage.getItem('productInfo');
    if (storedProductInfo) {
      setProductInfo(JSON.parse(storedProductInfo));
    }
  }, []);

  const saveProductInfo = (productInfo: Product2) => {
    setProductInfo(productInfo);
    localStorage.setItem('productInfo', JSON.stringify(productInfo));
    // console.log(productInfo);
  };

  const dropProductInfo = () => {
    setProductInfo(null);
    localStorage.removeItem('productInfo');
  };

  return (
    <ProductFormContext.Provider
      value={{
        productInfo,
        saveProductInfo,
        dropProductInfo
      }}
    >
      {children}
    </ProductFormContext.Provider>
  );
};

export const useProductForm = () => {
  const context = useContext(ProductFormContext);
  if (!context) {
    throw new Error('useProductForm must be used within an ProductFormProvider');
  }
  return context;
};