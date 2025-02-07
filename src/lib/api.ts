import { Product2, UserFormData } from '@/utils/types';
import axios from 'axios';
// import { revalidatePath } from 'next/cache';

const API_URL = '/api';


// Users
export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
  //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users: ', error);
    throw error;
  }
};

export const getUserById = async (id: string | string[]) => {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching user by ID: ', error);
    throw error;
  }
};

export const createUser = async (UserData: UserFormData) => {
  try {
    // console.log('Data being sent:', UserData);
    const response = await axios.post(`${API_URL}/users`, UserData);
    // console.log(response.data);
    // revalidatePath('/admin/users');
    return response.data;
  } catch (error) {
    console.error('Error creating user: ', error);
    throw error;
  }
};

export const updateUser = async (id: string, UserData: UserFormData) => {
  const response = await axios.put(`${API_URL}/users/${id}`, UserData);
  return response.data;
};

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete user: ', error);
    throw error;
  }
};


// Products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
  //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};

export const getProductById = async (id: string | string[]) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID: ', error);
    throw error;
  }
};

export const createProduct = async (ProductData: Product2) => {
  try {
    // console.log('Data being sent:', ProductData);
    const response = await axios.post(`${API_URL}/products`, ProductData);
    // console.log(response.data);
    // revalidatePath('/admin/products');
    return response.data;
  } catch (error) {
    console.error('Error creating product: ', error);
    throw error;
  }
};

export const updateProduct = async (id: string, ProductData: Product2) => {
  const response = await axios.put(`${API_URL}/products/${id}`, ProductData);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete product: ', error);
    throw error;
  }
};



// for dummyJson api
export const getDummyJsonProducts = async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DummyJson_API_URL}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products: ', error);
    throw error;
  }
};
// getDummyJsonProducts();

export const getDummyJsonProductById = async (id: string) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_DummyJson_API_URL}/${id}`);
  //   console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by id: ', error);
    throw error;
  }
};
