// favouriteThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../types/types.ts';
import {
  getAllFavorites as getAllFavoritesByUserAPI,
  addFavorite as addFavoriteAPI,
} from '../../api/getAll.ts';
import { updateAllFavourites, addFavourite } from './favouriteSlice.ts';

export const fetchFavorites = createAsyncThunk(
  'favourites/fetchFavorites',
  async (userId: string, { dispatch }) => {
    const favorites = await getAllFavoritesByUserAPI(userId);
    dispatch(updateAllFavourites(favorites));
    return favorites;
  },
);

export const addFavorite = createAsyncThunk(
  'favourites/addFavorite',
  async ({ product, userId }: { product: Product; userId: string }, { dispatch }) => {
    const newFavorite = await addFavoriteAPI(product, userId);
    dispatch(addFavourite(newFavorite));
    return newFavorite;
  },
);
