import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledSelectCategory from './StyledSelectCategory.ts';

interface CategoryProps {
  images: string;
  name: string;
  amount: number;
}

const categories: CategoryProps[] = [
  { images: '/img/categories_images/phones_category.png', name: 'Phones', amount: 124 },
  { images: '/img/categories_images/accessories_category.png', name: 'Accessories', amount: 34 },
  { images: '/img/categories_images/tablets_category.png', name: 'Tablets', amount: 36 },
];

function SelectCategory(): React.ReactNode {
  return (
    <StyledSelectCategory className="category">
      {categories.map(category => (
        <div key={category.name} className="category-item">
          <Link to={`/shop/${category.name.toLowerCase()}`}>
            <img
              className="category__image"
              src={category.images}
              alt={category.name.toLowerCase()}
            />
          </Link>
          <div className="category__name">{`${category.name.charAt(0).toUpperCase() + category.name.slice(1)}`}</div>
          <div className="category__amount">{`${category.amount} ${t('models')}`}</div>
        </div>
      ))}
    </StyledSelectCategory>
  );
}

export default SelectCategory;
