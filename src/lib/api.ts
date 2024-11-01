import { Product } from '@/utils/types';
import axios from 'axios';
// import { revalidatePath } from 'next/cache';

const API_URL = '/api/products';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}`);
//   console.log(response.data);
  return response.data;
};

export const getProductById = async (id: string | string[]) => {
    try {
    const response = await axios.get(`${API_URL}/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};

export const createProduct = async (ProductData: Product) => {
  try {
    // console.log('Data being sent:', ProductData);
    const response = await axios.post(`${API_URL}`, ProductData);
    // console.log(response.data);
    // revalidatePath('/admin/products');
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};


export const updateProduct = async (id: string, ProductData: Product) => {
  const response = await axios.put(`${API_URL}/${id}`, ProductData);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete product:', error);
    throw error;
  }
};
