import React from 'react';
import StyledHeader from './StyledHeader.ts';

function Header(): React.ReactNode {
  return (
    <StyledHeader className="header">
      <nav id="nav_bar" className="navbar">
        <div className="nav_logo">
          <img id="logo" src="img/icons/logo.png" alt="Logo" />
        </div>
        <div className="nav_links">
          <a href="/" className="nav_link active">
            Home
          </a>
          <a className="nav_link" href="/">
            Phones
          </a>
          <a className="nav_link" href="/">
            Tablets
          </a>
          <a className="nav_link" href="/">
            Accessories
          </a>
        </div>
        <div className="nav_icons">
          <a className="icon icon--like" href="/">
            <img src="img/icons/favourites_black.png" alt="Like" />
          </a>
          <a className="icon" href="/">
            <img src="img/icons/shopping_bag_black.png" alt="Cart" />
          </a>
        </div>
        <a className="icon burger_menu" href="/">
          <img src="img/icons/burger_menu.png" alt="Burger Menu" />
        </a>
      </nav>
    </StyledHeader>
  );
}

export default Header;