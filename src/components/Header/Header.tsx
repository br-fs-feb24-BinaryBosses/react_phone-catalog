import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader.ts';
import { useAppSelector } from '../../context/hooks.ts';

type Props = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ activeMenu, setActiveMenu }: Props): React.ReactNode {
  const favoritesQtd = useAppSelector(state => state.favourites.products.length);
  const cartQtd = useAppSelector(state => state.cart.products.length);

  function handleBurguerMenu(): void {
    setActiveMenu(state => !state);
  }

  return (
    <StyledHeader className="header" id="header" $qtdFav={favoritesQtd} $cartQtd={cartQtd}>
      <nav id="nav_bar" className="navbar">
        <div className="nav_logo">
          <img id="logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="nav_links">
          <NavLink to="/" className="nav_link">
            {' '}
            {/* exist a active class in this class adjust  */}
            Home
          </NavLink>
          <NavLink className="nav_link" to="/shop/phones">
            Phones
          </NavLink>
          <NavLink className="nav_link" to="/shop/tablets">
            Tablets
          </NavLink>
          <NavLink className="nav_link" to="/shop/accessories">
            Accessories
          </NavLink>
        </div>
        <div className="nav_icons">
          <NavLink className="icon icon--like" to="/favorites">
            <img src="/img/icons/favourites_black.png" alt="Like" />
          </NavLink>
          <NavLink className="icon icon--cart" to="/cart" >
            <img src="/img/icons/shopping_bag_black.png" alt="Cart" />
          </NavLink>
        </div>
        <a className="icon burger_menu" href="/mobileMenu">
          <img src="/img/icons/burger_menu.png" alt="Burger Menu" />
        </a>
      </nav>
      {activeMenu && (
        <div className="header__burguer-menu">
          <a href="/" className="header__burguer-menu-link">
            {' '}
            {/* exist a active class in this class adjust  */}
            Home
          </a>
          <NavLink className="header__burguer-menu-link" to="/shop/phones">
            Ph
          </NavLink>
          <NavLink className="header__burguer-menu-link" to="/shop/tablets">
            Tablets
          </NavLink>
          <NavLink className="header__burguer-menu-link" to="/shop/accessories">
            Accessories
          </NavLink>
        </div>
      )}
    </StyledHeader>
  );
}

export default Header;
