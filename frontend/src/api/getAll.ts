import { Product, SessionData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000/';

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

