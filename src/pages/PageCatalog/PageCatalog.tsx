import React from 'react';
import StyledPageCatalog from './StyledPageCatalog.ts';

export type CardData = {
  id: number;
  title: string;
  content: string;
};

const data: CardData[] = [
  { id: 1, title: 'Card 1', content: 'Content for card 1' },
  { id: 2, title: 'Card 2', content: 'Content for card 2' },
  { id: 3, title: 'Card 3', content: 'Content for card 3' },
  { id: 4, title: 'Card 4', content: 'Content for card 4' },
  { id: 5, title: 'Card 5', content: 'Content for card 5' },
  { id: 6, title: 'Card 6', content: 'Content for card 6' },
  { id: 7, title: 'Card 7', content: 'Content for card 7' },
  { id: 8, title: 'Card 8', content: 'Content for card 8' },
  { id: 9, title: 'Card 9', content: 'Content for card 9' },
  { id: 10, title: 'Card 10', content: 'Content for card 10' },
  { id: 11, title: 'Card 11', content: 'Content for card 11' },
  { id: 12, title: 'Card 12', content: 'Content for card 12' },
  { id: 13, title: 'Card 13', content: 'Content for card 13' },
  { id: 14, title: 'Card 14', content: 'Content for card 14' },
  { id: 15, title: 'Card 15', content: 'Content for card 15' },
  { id: 16, title: 'Card 16', content: 'Content for card 16' },
];

function PageCatalog() {
  return (
    <StyledPageCatalog className="page-catalog">
      <div className="page-catalog__top-section">
        <h1 className="page-catalog__top-section-title">Mobile Phones</h1>
        <h2 className="page-catalog__top-section-subtitle">95 models</h2>
      </div>
      <div className="page-catalog__select">
        <div className="page-catalog__select-wrapper">
          <h1 className="page-catalog__select-label">Sort By</h1>
          <select className="page-catalog__select-box page-catalog__select-box--selected">
            <option>Newest</option>
          </select>
        </div>
        <div className="page-catalog__select-wrapper">
          <h1 className="page-catalog__select-label">Items on page</h1>
          <select className="page-catalog__select-box">
            <option>16</option>
          </select>
        </div>
      </div>
      <div className="page-catalog__list">
        {data.map(item => (
          <div className="page-catalog__list-card" key={item.id} />
        ))}
      </div>
      <div className="page-catalog__pagination">
        <button
          type="button"
          className="page-catalog__pagination-button page-catalog__pagination-button--isarrow"
        >
          &lt;
        </button>
        <button type="button" className="page-catalog__pagination-button">
          1
        </button>
        <button
          type="button"
          className="page-catalog__pagination-button page-catalog__pagination-button--filled"
        >
          2
        </button>
        <button type="button" className="page-catalog__pagination-button">
          3
        </button>
        <button type="button" className="page-catalog__pagination-button">
          4
        </button>
        <button
          type="button"
          className="page-catalog__pagination-button page-catalog__pagination-button--isarrow"
        >
          &gt;
        </button>
      </div>
    </StyledPageCatalog>
  );
}

export default PageCatalog;
