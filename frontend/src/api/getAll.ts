import { Product, SessionData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OGZhZjI0Zi01ZDU4LTQyZjYtYjBjZC1mZWE2OWVkZTM5YmQiLCJpYXQiOjE3MjEzMzg0MTYsImV4cCI6MTcyMTM0MjAxNn0.URyODloMOd8lIZ7MYdVgMggWqJoR9-aBy-sLWogMnbY';

export const getProducts = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}products/allProducts`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data as Product[]);
};

export const getProductByID = (id: string | undefined): Promise<Product> => {
  return fetch(`${BASE_URL}products/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      return response.json();
    })
    .then(res => res.data as Product);
};

export const getSessionData = (idSession: string): Promise<SessionData> => {
  return fetch(`/api/userSessions/${idSession}.json`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      return response.json();
    })
    .then(data => data[0] as SessionData);
};

export const getAllFavorites = (userId: string): Promise<Product[]> => {
  return fetch(`${BASE_URL}favorites/getFavorites`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch favorites: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data);
};

export const addFavorite = (productId: string, userId: string) => {
  return fetch(`${BASE_URL}favorites/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId, userId }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to add favorite: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data);
};

export const deleteFavorite = (productId: string, userId: string) => {
  return fetch(`${BASE_URL}favorites/${productId}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to add favorite: ${response.statusText}`);
      }
      return response.json();
    })
    .then(res => res.data);
};
