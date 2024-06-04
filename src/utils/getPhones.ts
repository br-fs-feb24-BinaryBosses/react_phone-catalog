import { Phone } from '../types/types';

export function getPhones(): Promise<Phone[]> {
  return fetch('api/phones.json') // Adjust path if necessary
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch phones: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => data as Phone[]) // Type assertion for safety
    .catch((error) => {
      console.error('Error fetching phones:', error);
      throw error;
    });
}