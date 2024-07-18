import { FullProduct, Product, SessionData } from '../types/types.ts';

const BASE_URL = 'http://localhost:3000';

export const getProducts = (): Promise<Product[]> => {
  return fetch('/api/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Product[]);
};
/* Atention! This method needs to be updated by api end point correctly */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductByID = (id: string | undefined): Promise<FullProduct> => {
  return fetch('/api/mockProduct.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }

      return response.json();
    })
    .then(data => data as FullProduct);
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

export const getNewestModels = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}/homepage/newestModels`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch newest models: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.data as Product[]);
};

export const getHotPrices = (): Promise<Product[]> => {
  return fetch(`${BASE_URL}/homepage/hotPrices`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch hot prices: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.data as Product[]);
};
