/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader.ts';
import { getProducts } from '../../api/getAll.ts';
import { Product } from '../../types/types.ts';
import ProductCard from '../ProductCard/ProductCard.tsx';

function Header(): React.ReactNode {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then(productsData => {
        setProducts(productsData);
      })
      .catch(error => {
        console.error(error);
      });
  }, [products]);

  useEffect(() => {
    const filterData = products.filter(item => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setSearchResults(filterData);
  }, [products, query]);

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setQuery('');
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <StyledHeader className="header" id="header">
        <nav id="nav_bar" className="navbar">
          <div className="nav_logo">
            <img id="logo" src="img/icons/logo.png" alt="Logo" />
          </div>
          <div className="nav_links">
            {isSearchActive ? (
              <input
                onChange={handleSearchChange}
                type="text"
                placeholder="Search..."
                id="search_bar"
                className="search_bar"
              />
            ) : (
              <>
                <a href="/" className="nav_link">
                  Home
                </a>
                <NavLink className="nav_link" to="/phones">
                  Phones
                </NavLink>
                <a className="nav_link" href="/">
                  Tablets
                </a>
                <a className="nav_link" href="/">
                  Accessories
                </a>
              </>
            )}
          </div>
          <div className="nav_icons">
            <button className="icon icon--search" type="button" onClick={toggleSearch}>
              <img src="img/icons/search.png" alt="Search" />
            </button>
            <a className="icon icon--like" href="/">
              <img src="img/icons/favourites_black.png" alt="Like" />
            </a>
            <NavLink className="icon icon--shopping" to="/cart">
              <img src="img/icons/shopping_bag_black.png" alt="Cart" />
            </NavLink>
          </div>
          <a className="icon burger_menu" href="/">
            <img src="img/icons/burger_menu.png" alt="Burger Menu" />
          </a>
        </nav>
      </StyledHeader>
      {products.map(item => (
        <ProductCard key={item.id} product={item.name} />
      ))}
      ;
    </>
  );
}

export default Header;
