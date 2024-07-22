import React from 'react';
import { useTranslation } from 'react-i18next';
import { getHotPrices, getNewestModels } from '../../api/getAll.ts';
import ProductSlider from '../../components/ProductSlider/ProductSlider.tsx';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import Banner from './components/Banner/Banner.tsx';

function HomePage(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <StyledHomePage className="home-page">
      <h1 className="home-page__title">{t('welcome')}</h1>
      <Banner />
      <div className="home-page__sliders-container">
        <ProductSlider title={t('brandNewModels')} getProducts={getNewestModels} />
      </div>
      <div className="home-page__shop">
        <div className="home-page__shop-title">{t('shopByCategory')}</div>
        <div className="home-page__shop-container">
          <SelectCategory />
        </div>
      </div>
      <div className="home-page__sliders-container">
        <ProductSlider title={t('hotPrices')} getProducts={getHotPrices} />
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
