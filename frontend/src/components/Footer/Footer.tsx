import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledFooter from './StyledFooter.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

function Footer(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <StyledFooter className="footer">
      <footer id="footer-bar" className="footer__links">
        <div className="footer__item">
          <img id="footer__logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="footer__center-links">
          <a
            href="https://github.com/br-fs-feb24-BinaryBosses/react_phone-catalog"
            target="_blank"
            className="footer__item"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="/" className="footer__item">
            {t('footerContacts')}
          </a>
          <a href="/" className="footer__item">
            {t('footerRights')}
          </a>
        </div>
        <a href="#App" className="footer__item footer__icons">
          <span>{t('backToTop')}</span>
          <Icon icon={IconType.ARROW_UP} border fill="black" />
        </a>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
