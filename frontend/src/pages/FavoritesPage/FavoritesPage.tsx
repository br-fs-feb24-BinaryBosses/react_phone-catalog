import React from 'react';
import StyledFavoritesPage from './StyledFavoritesPage.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { useAppSelector } from '../../context/hooks.ts';
// import { fetchFavorites } from '../../context/favoriteContext/favoritesThunks.ts';
// import store from '../../context/store.ts';

export const userId = '68faf24f-5d58-42f6-b0cd-fea69ede39bd';

function FavoritesPage(): React.ReactNode {
  const contentPage: Product[] = useAppSelector(state => state.favourites.products);

  return (
    <StyledFavoritesPage className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">Favourites</h1>
        <h2 className="top-section__subtitle">
          {contentPage.length ? contentPage.length : 0} items
        </h2>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
      </div>
    </StyledFavoritesPage>
  );
}

export default FavoritesPage;
