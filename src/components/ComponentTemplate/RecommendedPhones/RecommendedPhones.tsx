import React, { useEffect, useState } from 'react';
import StyledComponentRecommendedPhones from './StyledComponentRecommendedPhones.ts';
import recommendedPhonesData from './RecommendedPhonesData.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';

function RecommendedPhones(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  const handleNext = () => {
    if (currentIndex < recommendedPhonesData.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const updateItemsToShow = () => {
    if (window.innerWidth >= 1024) {
      setItemsToShow(4);
    } else if (window.innerWidth >= 768) {
      setItemsToShow(2);
    } else {
      setItemsToShow(1);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  useEffect(() => {
    if (currentIndex > recommendedPhonesData.length - itemsToShow) {
      setCurrentIndex(recommendedPhonesData.length - itemsToShow);
    }
  }, [itemsToShow, currentIndex]);

  return (
    <StyledComponentRecommendedPhones className="recommended-phones">
      <div className="recommended-phones__upper-section">
        <div className="recommended-phones__title">You may also like</div>
        <div className="recommended-phones__buttons-wrapped">
          <button
            type="button"
            className="recommended-phones__button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            type="button"
            className="recommended-phones__button"
            onClick={handleNext}
            disabled={currentIndex >= recommendedPhonesData.length - itemsToShow}
          >
            &gt;
          </button>
        </div>
      </div>
      <div
        className="recommended-phones__list"
        style={{ transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)` }}
      >
        {recommendedPhonesData.slice(currentIndex, currentIndex + itemsToShow).map(phone => (
          <div
            key={phone.id}
            className="recommended-phones__list-card"
            style={{ width: `${100 / itemsToShow}%` }}
          >
            <ProductCard key={phone.id} />{' '}
          </div>
        ))}
      </div>
    </StyledComponentRecommendedPhones>
  );
}

export default RecommendedPhones;
