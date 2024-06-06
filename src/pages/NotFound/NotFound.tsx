import React from 'react';
import Lottie from 'lottie-react';
import animation from '../../../public/img/lotties/animation.json';

import StyledNotFound from './StyledNotFound.ts';
import Header from '../../components/Header/Header.tsx';
import Footer from '../../components/Footer/Footer.tsx';

/* interface PageTemplateProps {
  // Define here props of this Component
} */

function NotFound(/* props: PageTemplateProps */): React.ReactNode {
  /* const {
    // someProps
  } = props;
  */

  return (
    <>
      <Header />
      <StyledNotFound className="not_found">
        <div className="wrapper">
          <Lottie animationData={animation} loop />
          <h1>Página não encontrada.</h1>
        </div>
      </StyledNotFound>
      <Footer />
    </>
  );
}

export default NotFound;
