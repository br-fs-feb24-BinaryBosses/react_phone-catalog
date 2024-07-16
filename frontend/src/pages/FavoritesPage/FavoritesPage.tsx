import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledFavoritesPage from './StyledFavoritesPage.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { useAppSelector } from '../../context/hooks.ts';

function FavoritesPage(): React.ReactNode {
  const contentPage: Product[] = useAppSelector(state => state.favourites.products);
  const { t } = useTranslation();

  return (
    <StyledFavoritesPage className="page-catalog">
      <div className="top-section">
        <h1 className="top-section__title">{t('Favorites')}</h1>
        <h2 className="top-section__subtitle">
          {contentPage.length ? contentPage.length : 0} {t('items')}
        </h2>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
      </div>
    </StyledFavoritesPage>
  );
}

export default FavoritesPage;
