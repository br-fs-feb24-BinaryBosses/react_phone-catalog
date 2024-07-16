/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import StyledPageCatalog from './StyledPageCatalog.ts';
import ProductCard from '../../components/ProductCard/ProductCard.tsx';
import { Product } from '../../types/types.ts';
import { getProducts } from '../../api/getAll.ts';
import { IconType } from '../../components/Icon/Icon.ts';
import Dropdown from '../../components/Dropdown/Dropdown.tsx';
import StyledToastContainer from '../../components/ToastContainer/StyledToastContainer.ts';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb.tsx';

export type SelectOptions = '4' | '8' | '16' | 'all';

type SortOptions = 'newest' | 'alphabetically' | 'cheapest';

const categoryMapping: { [key: string]: string } = {
  phones: 'Mobile phones',
  accessories: 'Accessories',
  tablets: 'Tablets',
};

const sortOptions = [
  { label: 'Newest', value: 'newest', icon: IconType.ARROW_DOWN },
  { label: 'Alphabetically', value: 'alphabetically', icon: IconType.ARROW_DOWN },
  { label: 'Cheapest', value: 'cheapest', icon: IconType.ARROW_DOWN },
];

const itemsPerPageOptions = [
  { label: '4', value: '4' },
  { label: '8', value: '8' },
  { label: '16', value: '16' },
  { label: 'All', value: 'all' },
];

function PageCatalog(): React.ReactNode {
  const { category } = useParams<{ category?: string }>();
  const [quantityPerPage, setQuantityPerPage] = useState<SelectOptions | string>('4');
  const [contentPage, setContentPage] = useState<Product[]>([]);
  const [buttonsNumber, setButtonsNumber] = useState<number[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [fourButtons, setFourButtons] = useState<number[]>([]);
  const [renderedData, setRenderedData] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<SortOptions | string>('newest');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    setPageNumber(1);
    setButtonsNumber([]);
  }, [quantityPerPage, category]);

  useEffect(() => {
    let sortBy = queryParams.get('sortBy');
    let itemsPerPage = queryParams.get('itemsPerPage');
    let page = queryParams.get('page');

    if (!sortBy || !itemsPerPage || !page) {
      const newQueryParams = new URLSearchParams();

      if (!sortBy) {
        newQueryParams.set('sortBy', 'newest');
      } else {
        newQueryParams.set('sortBy', sortBy);
      }

      if (!itemsPerPage) {
        newQueryParams.set('itemsPerPage', '4');
      } else {
        newQueryParams.set('itemsPerPage', itemsPerPage);
      }

      if (!page) {
        newQueryParams.set('page', '1');
      } else {
        newQueryParams.set('page', page);
      }

      sortBy = newQueryParams.get('sortBy');
      itemsPerPage = newQueryParams.get('itemsPerPage');
      page = newQueryParams.get('page');

      navigate({ search: newQueryParams.toString() }, { replace: true });
    }

    setSortOption(sortBy as SortOptions);
    setQuantityPerPage(itemsPerPage as SelectOptions);
    setPageNumber(Number(page));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search, navigate]);

  useEffect(() => {
    if (buttonsNumber.length < 4) {
      const count = 1;
      const arr = [];

      for (let i = count; i <= buttonsNumber.length; i += 1) {
        arr.push(i);
      }
      setFourButtons(arr);

      return;
    }

    if (buttonsNumber.length > 4) {
      let count = 1;
      const arr = [];

      if (pageNumber === buttonsNumber[buttonsNumber.length - 1]) {
        return;
      }

      if (fourButtons[0] === 1 && pageNumber === 1) {
        return;
      }

      if (fourButtons[1] === pageNumber || fourButtons[2] === pageNumber) {
        count = pageNumber;
        return;
      }

      if (fourButtons[3] === pageNumber) {
        count = pageNumber - 2;
      }

      if (fourButtons[0] === pageNumber) {
        count = pageNumber - 1;
      }

      for (let i = count; i < count + 4; i += 1) {
        arr.push(i);
      }
      setFourButtons(arr);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonsNumber, buttonsNumber.length, pageNumber]);

  useEffect(() => {
    if (contentPage.length !== 0) {
      setButtonsNumber([]);

      const tryToChangeToNumber = Number(quantityPerPage);

      if (Number.isNaN(tryToChangeToNumber)) {
        setContentPage(renderedData);
        return;
      }
      const possiblePerPage = Math.ceil(renderedData.length / Number(quantityPerPage));

      const newArr = [];
      let cont = 0;

      for (let i = 0; i < possiblePerPage; i += 1) {
        newArr.push(renderedData.slice(cont, Number(quantityPerPage) + cont));
        cont += Number(quantityPerPage);

        setButtonsNumber(state => [...state, i + 1]);
      }

      setContentPage(newArr[pageNumber - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, quantityPerPage, renderedData]);

  function sortProducts(products: Product[], sortBy: string): Product[] {
    switch (sortBy) {
      case 'newest':
        return products.sort((a, b) => new Date(b.year).getTime() - new Date(a.year).getTime());
      case 'alphabetically':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'cheapest':
        return products.sort((a, b) => a.price - b.price);
      default:
        return products;
    }
  }

  useEffect(() => {
    const capitalizedCategory = category!.charAt(0).toUpperCase() + category!.slice(1);
    setIsLoading(true);
    getProducts()
      .then(fetchedData => {
        const filteredData = fetchedData.filter(e => e.category === category);
        const sortedData = sortProducts(filteredData, sortOption);
        const paginatedData = sortedData.slice(
          (pageNumber - 1) * Number(quantityPerPage),
          pageNumber * Number(quantityPerPage),
        );

        setRenderedData(sortedData);

        if (quantityPerPage === 'all') {
          setContentPage(sortedData);
        }
        setContentPage(paginatedData);
      })
      .catch(() => {
        toast.error(`Error loading ${capitalizedCategory}...`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeButton: false,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortOption]);

  if (category !== 'phones' && category !== 'tablets' && category !== 'accessories') {
    navigate(`/not-found`, { replace: true });
  }

  if (renderedData.length === 0 && isLoading) {
    return <h1>Loading</h1>;
  }

  const categoryTitle = categoryMapping[category ?? ''] || 'Products';

  return (
    <StyledPageCatalog className="page-catalog">
      <Breadcrumb />
      <StyledToastContainer />
      <div className="top-section">
        <h1 className="top-section__title">{categoryTitle}</h1>
        <h2 className="top-section__subtitle">{renderedData.length} models</h2>
      </div>
      <div className="select">
        <div className="select__wrapper">
          <h1 className="select__label">Sort By</h1>
          <Dropdown
            options={sortOptions}
            onChange={value => {
              navigate(`?sortBy=${value}&itemsPerPage=${quantityPerPage}&page=${1}`);
            }}
            currentValue={sortOption}
          />
        </div>
        <div className="select__wrapper">
          <h1 className="select__label">Items on page</h1>

          <Dropdown
            options={itemsPerPageOptions}
            onChange={(value: string) => {
              navigate(`?sortBy=${sortOption}&itemsPerPage=${value}&page=${1}`);
            }}
            currentValue={quantityPerPage}
          />
        </div>
      </div>
      <div className="list">
        {contentPage && contentPage.map(item => <ProductCard key={item.id} product={item} />)}
      </div>

      <div className="pagination">
        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === 1 || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() => {
            setPageNumber(state => {
              const newPage = state - 1;

              queryParams.set('page', String(newPage));

              navigate({ search: queryParams.toString() });
              return newPage;
            });
          }}
        >
          &lt;
        </button>

        {fourButtons.map(number => (
          <button
            key={number}
            type="button"
            className={`pagination__button ${pageNumber === number ? 'pagination__button--filled' : ''}`}
            onClick={() =>
              setPageNumber(() => {
                const newPage = number;

                queryParams.set('page', String(newPage));

                navigate({ search: queryParams.toString() });
                return newPage;
              })
            }
          >
            {number}
          </button>
        ))}

        <button
          type="button"
          className={`pagination__button pagination__button--isarrow ${pageNumber === buttonsNumber.length || quantityPerPage === 'all' ? 'pagination__button--hidden' : ''}`}
          onClick={() =>
            setPageNumber(state => {
              const newPage = state + 1;

              queryParams.set('page', String(newPage));

              navigate({ search: queryParams.toString() });
              return newPage;
            })
          }
        >
          &gt;
        </button>
      </div>
    </StyledPageCatalog>
  );
}

export default PageCatalog;
