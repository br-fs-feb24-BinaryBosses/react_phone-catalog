import React, { useState, useEffect } from 'react';
import StyledHomePage from './StyledHomePage.ts';
import SelectCategory from './components/SelectCategory/SelectCategory.tsx';
import { getProducts } from '../../api/getAll.ts';

interface Category {
  name: string;
  amount: number;
  image: string;
}

interface Image {
  id: number;
  src: string;
}

const mobileImages: Image[] = [
  { id: 1, src: '/img/banner_320px_1.png' },
  { id: 2, src: '/img/banner_320px_2.png' },
  { id: 3, src: '/img/banner_320px_3.png' },
];

const desktopImages: Image[] = [
  { id: 1, src: '/img/banner_640px_1.png' },
  { id: 2, src: '/img/banner_640px_2.png' },
  { id: 3, src: '/img/banner_640px_3.png' },
];

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const [categories, setCategories] = useState<{ [key: string]: Category }>({});

  const images = isMobile ? mobileImages : desktopImages;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    getProducts().then(products => {
      const newCategories = products.reduce(
        (acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = {
              name: product.category,
              amount: 0,
              image: `/img/categories_images/${product.category}_category.png`,
            };
          }
          acc[product.category].amount += 1;
          return acc;
        },
        {} as { [key: string]: Category },
      );

      setCategories(newCategories);
    });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  return (
    <StyledHomePage className="home-page" data-current-index={currentIndex}>
      <h1 className="home-page__title">Welcome to Nice Gadgets store!</h1>
      <div className="home-page__banner">
        <div className="home-page__banner-structure">
          <button onClick={handlePrev} type="button" className="home-page__banner-structure-button">
            &lt;
          </button>
          <div
            className="home-page__banner-structure-slider"
            data-current-index={currentIndex}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {images.map((item, index) => (
              <div
                key={item.id}
                className={`home-page__banner-structure-slider-image ${index === currentIndex ? '--active' : ''}`}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
              >
                <img src={item.src} alt={`Slide ${item.id}`} style={{ width: '100%' }} />
              </div>
            ))}
          </div>
          <button onClick={handleNext} type="button" className="home-page__banner-structure-button">
            &gt;
          </button>
        </div>
        <div className="home-page__banner-indicators">
          {images.map((item, index) => (
            <div
              key={item.id}
              className={`home-page__banner-indicators-indicator ${index === currentIndex ? 'home-page__banner-indicators-indicator--active' : ''}`}
            />
          ))}
        </div>
      </div>
      <div className="home-page__sliders-container">
        <h2 className="home-page__sliders-container-title">Brand new models</h2>
        <div className="home-page__sliders-container-content">Slider</div>
      </div>
      <div className="home-page__shop">
        <div className="home-page__shop-title">Shop by category</div>
        <div className="home-page__shop-container">
          {Object.values(categories).map(category => (
            <SelectCategory
              key={category.name}
              images={category.image}
              name={category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              amount={category.amount}
            />
          ))}
        </div>
      </div>
      <div className="home-page__sliders-container--second-child">
        <h2 className="home-page__sliders-container-title">Hot prices</h2>
        <div className="home-page__sliders-container-content">Slider</div>
      </div>
    </StyledHomePage>
  );
}

export default HomePage;
