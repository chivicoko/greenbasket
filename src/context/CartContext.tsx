"use client"; // Add this line

import { Product2 } from '@/utils/types';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define CartContext
interface CartContextType {
  cart: Product2[];
  addToCart: (product: Product2) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalCount: number;
  getProductQuantity: (productId: string) => number;
  getTotalPrice: () => string;
  isProductInCart: (productId: string) => boolean;
  increaseProductQuantity: (productId: string) => void;
  decreaseProductQuantity: (productId: string) => void;
}

// Initialize CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provide CartContext
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product2[]>([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product2) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((total, product) => total + (product.quantity || 1), 0);

  const getProductQuantity = (productId: string): number => {
    const product = cart.find((item) => item.id === productId);
    return product ? product.quantity || 1 : 0;
  };
  

  const getTotalPrice = () => {
    const total = cart.reduce((sum, product) => {
      const price = parseFloat(product.price) * (product.quantity || 1);
      return sum + price;
    }, 0);
    return total.toFixed(2);
  };

  // Check if a product is in the cart
  const isProductInCart = (productId: string): boolean => {
    return cart.some((item) => item.id === productId);
  };

  // Increase the quantity of a product in the cart
  const increaseProductQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };

  // Decrease the quantity of a product in the cart
  const decreaseProductQuantity = (productId: string) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity! > 1
            ? { ...item, quantity: item.quantity! - 1 }
            : item
        )
        .filter((item) => item.quantity! > 0) // Ensure products with quantity 0 are removed
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalCount,
        getProductQuantity,
        getTotalPrice,
        isProductInCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook to use CartContext
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
