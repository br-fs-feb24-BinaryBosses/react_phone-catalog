import styled from 'styled-components';

export const StyledProductCard = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e2e6e9;
  border-radius: 8px;
  width: 287px;
  height: 440px;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 229px;
    height: 506px;
  }
`;

export const StyledProductLabel = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledProductImage = styled.img`
  width: 150px;
  object-fit: cover;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 165px;
    height: 196px;
  }
`;
export const StyledProductDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledProductTitle = styled.p`
  //styleName: Body text 14;
  font-family: Mont;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: left;

  margin: 24px 0 8px;
  width: 223px;

  color: var(--rstyle1-gray-primary);

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 165px;
  }
`;
export const StyledProductPrice = styled.p`
  //styleName: Desktop & Tablet/H3;
  font-family: Mont;
  font-size: 22px;
  font-weight: 800;
  line-height: 30.8px;
  text-align: left;

  margin: 0;
  width: 51px;

  color: var(--rstyle1-gray-primary);
`;
export const StyledLine = styled.div`
  border: 1px solid var(--rstyle1-gray-elements);
  width: 228px;
  margin: 8px 0;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 165px;
  }
`;
export const StyledProductDetails = styled.div`
  display: flex;
  gap: 100px;

  @media (min-width: 640px) and (max-width: 1199px) {
    gap: 50px;
  }
`;
export const StyledProductDetailTitle = styled.div``;
export const StyledTitle = styled.p`
  display: flex;
  flex-direction: column;

  //styleName: Small text 12;
  font-family: Mont;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.34px;
  text-align: left;
  margin: 0;
  padding: 2px 0;

  color: var(--rstyle1-gray-secondary);
`;
export const StyledProductDetailDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const StyledDescription = styled.div`
  font-family: Mont;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.34px;
  text-align: right;
  padding: 2px 0;

  color: var(--rstyle1-gray-primary);
`;
export const StyledProductButtonLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const StyledButton = styled.button`
  width: 175px;
  height: 40px;
  border-radius: 48px;
  background-color: var(--rstyle1-accent);
  border: none;
  color: #fff;
  text-align: center;
  padding: 0;

  //styleName: Buttons;
  font-family: Mont;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;

  @media (min-width: 640px) and (max-width: 1199px) {
    width: 117px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const StyledHeart = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
