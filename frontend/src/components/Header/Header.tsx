import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledHeader from './StyledHeader.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { useAppDispatch, useAppSelector } from '../../context/hooks.ts';
import { setUserDataSession, userStateInitialState } from '../../context/userContext/userSlice.ts';
import Dropdown from '../Dropdown/Dropdown.tsx';

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Português', value: 'pt' },
];

function Header(): React.ReactNode {
  const cartQtd = useAppSelector(state => state.cart.orderItems.reduce((acc, el) => acc + el.quantity, 0));
  const favQtd = useAppSelector(state => state.favourites.products.length);
  const isLogged = useAppSelector(state => state.user.tokenSession);
  const dispatch = useAppDispatch();
  const navigateTo = useNavigate();
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handdlingLogoutButtonClick = () => {
    dispatch(setUserDataSession(userStateInitialState));
    localStorage.clear();
    
    navigateTo('/login');
  }

  return (
    <StyledHeader className="header">
      <div className="header_logo">
        <img id="logo" src="/img/icons/logo.png" alt="Logo" />
      </div>

      <nav className="header__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/home" className="nav__link">
              {t('headerHome')}
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/phones" className="nav__link">
              {t('headerPhones')}
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/tablets" className="nav__link">
              {t('headerTablets')}
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/shop/accessories" className="nav__link">
              {t('headerAccessories')}
            </NavLink>
          </li>
        </ul>
      </nav>
      <Dropdown options={languageOptions} onChange={changeLanguage} currentValue={i18n.language} />

      <div className="header__icons-container icons-container">
        {isLogged && <button
          className="icons-container__btn"
          onClick={() => handdlingLogoutButtonClick()}
          type="button"
          aria-label="Go to login page"
        >
          <Icon icon={IconType.LOGIN_DOOR} />
        </button>}
        
        {isLogged && <button
          className="icons-container__btn"
          onClick={() => navigateTo('/favorites')}
          type="button"
          aria-label="Go to favorites page"
        >
          {!!favQtd && <div className="icons-container__btn--indicator">{favQtd}</div>}
          <Icon icon={IconType.EMPTY_HEARTLIKE} />
        </button> }
        
        {isLogged && <button
          className="icons-container__btn"
          onClick={() => navigateTo('/cart')}
          type="button"
          aria-label="Go to cart page"
        >
          {!!cartQtd && <div className="icons-container__btn--indicator">{cartQtd}</div>}
          <Icon icon={IconType.EMPTY_CART} />
        </button>
}
        {isLogged && <button
          className="icons-container__btn icons-container__btn--menu-mobile"
          onClick={() => navigateTo('/mobileMenu')}
          type="button"
          aria-label="Go to Mobile Menu Navigation"
        >
          <Icon icon={IconType.MENU} />
        </button>
}
        {!isLogged && <button
          className="icons-container__btn"
          onClick={() => navigateTo('/login')}
          type="button"
          aria-label="Log in"
        >
          <Icon icon={IconType.CONFIG} />
        </button>}
      </div>
    </StyledHeader>
  );
}

export default Header;