import React from 'react';
import { useTranslation } from 'react-i18next';
import StyledFooter from './StyledFooter.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

function Footer(): React.ReactNode {
  const { t } = useTranslation();
  return (
    <StyledFooter className="footer">
      <footer id="footer_bar" className="footerlinks">
        <div className="footer-item">
          <img id="logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="center-links">
          <a
            href="https://github.com/br-fs-feb24-BinaryBosses/react_phone-catalog"
            target="_blank"
            className="footer-item"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="/" className="footer-item">
            {t('footerContacts')}
          </a>
          <a href="/" className="footer-item">
            {t('footerRights')}
          </a>
        </div>
        <a href="#App" className="footer-item icons">
          <span>{t('backToTop')}</span>
          <Icon icon={IconType.ARROW_UP} border fill="black" />
        </a>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
