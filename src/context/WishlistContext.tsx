"use client";

import { Product2 } from '@/utils/types';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

// Define WishlistContext
interface WishlistContextType {
  wishlist: Product2[];
  toggleWishlistBtn: (product: Product2) => void;
  clearWishlist: () => void;
  totalWishlistCount: number;
  isProductInWishlist: (productId: string) => boolean;
}

// Initialize WishlistContext
const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Provide WishlistContext
export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product2[]>([]);

  // Load Wishlist from localStorage when the component mounts
  useEffect(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);
  
  // Save wishlist to localStorage whenever the wishlist state changes, but only if it's not empty
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist]);

  const toggleWishlistBtn = (product: Product2) => {
    setWishlist((prevWishlist) => {
      const existingProduct = prevWishlist.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const totalWishlistCount = wishlist.length;

  // Check if a product is in the wishlist
  const isProductInWishlist = (productId: string): boolean => {
    return wishlist.some((item) => item.id === productId);
  };


  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlistBtn,
        clearWishlist,
        totalWishlistCount,
        isProductInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
