import styled from 'styled-components';

const StyledHeader = styled.header<{ $fav_count?: string }>`
  .navbar {
    top: 0;
    background-color: #fff;
    height: 64px;
    width: 100%;
    position: fixed;
    border-bottom: 2px solid #e2e6e9;
    display: flex;
    align-items: center;
    padding: 0px;
  }

  .nav_logo {
    margin-left: 25px;
  }

  .nav_links {
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin-left: 64px;
    .search_bar {
      width: 300px;
      transition
    }
  }

  .nav_link {
    margin-right: 64px;
    text-transform: uppercase;
    font-family: Mont;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    height: 64px;
    position: relative;
  }

  .nav_link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background-color: transparent;
    transition: background-color 0.3s;
  }

  .nav_link.active::after,
  .nav_link:hover::after {
    background-color: #000;
  }

  .nav_icons {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .icon {
    margin-right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 2px solid #e2e6e9;
    width: 64px;
    height: 64px;
    /* like::after {
			content: {(props) => props.$fav_count};
			background-color: blue;
			color: #fff;
			border-radius: 50%;
		} */
  }

  .icon img {
    width: 16px;
    height: 16px;
  }

  .burger_menu {
    display: none;
  }

  @media (max-width: 1199px) {
    .navbar {
      height: 48px;
    }
    .nav_links {
      margin-inline: 32px;
    }
    .nav_link {
      margin-right: 32px;
    }

    .nav_link::after {
      bottom: 8px;
    }
    .icon {
      width: 48px;
      height: 48px;
    }
  }

  @media (max-width: 639px) {
    .nav_links {
      .search_bar {
        width: 120px;
      }
    }

    .nav_link,
    .icon--like,
    .icon--shopping {
      display: none;
    }

    .burger_menu {
      display: flex;
    }
  }
`;

export default StyledHeader;
