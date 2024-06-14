import { FullProduct, Product } from '../types/types.ts';

export const getProducts = (): Promise<Product[]> => {
  return fetch('/api/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as Product[])
    .catch(error => {
      throw error;
    });
};

export const getBrandNewModels = (): Promise<Product[]> => {
  return fetch('/api/brandNewModels.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.slice(0, 12) as Product[])
    .catch(error => {
      throw error;
    });
};

export const getHotPrices = (): Promise<Product[]> => {
  return fetch('/api/hotPrices.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.slice(0, 12) as Product[])
    .catch(error => {
      throw error;
    });
};

export const getYouMayAlsoLike = (): Promise<Product[]> => {
  return fetch('/api/youMayAlsoLike.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data.slice(0, 12) as Product[])
    .catch(error => {
      throw error;
    });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductByID = (_ID: string | undefined): Promise<FullProduct> => {
  return fetch('/api/mockProduct.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data as FullProduct)
    .catch(error => {
      throw error;
    });
};
