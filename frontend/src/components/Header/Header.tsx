import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledHeader from './StyledHeader.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';
import { useAppSelector } from '../../context/hooks.ts';
import Dropdown from '../Dropdown/Dropdown.tsx';

const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' },
  { label: 'Português', value: 'pt' },
];

function HeaderN(): React.ReactNode {
  const cartQtd = useAppSelector(state => state.cart.quantity.reduce((acc, el) => acc + el, 0));
  const favQtd = useAppSelector(state => state.favourites.products.length);
  const navigateTo = useNavigate();
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
        <button
          className="icons-container__btn"
          onClick={() => navigateTo('/favorites')}
          type="button"
          aria-label="Go to favorites page"
        >
          {!!favQtd && <div className="icons-container__btn--indicator">{favQtd}</div>}
          <Icon icon={IconType.EMPTY_HEARTLIKE} />
        </button>
        <button
          className="icons-container__btn"
          onClick={() => navigateTo('/cart')}
          type="button"
          aria-label="Go to cart page"
        >
          {!!cartQtd && <div className="icons-container__btn--indicator">{cartQtd}</div>}
          <Icon icon={IconType.EMPTY_CART} />
        </button>
        <button
          className="icons-container__btn icons-container__btn--menu-mobile"
          onClick={() => navigateTo('/mobileMenu')}
          type="button"
          aria-label="Go to Mobile Menu Navigation"
        >
          <Icon icon={IconType.MENU} />
        </button>
      </div>
    </StyledHeader>
  );
}

export default HeaderN;
