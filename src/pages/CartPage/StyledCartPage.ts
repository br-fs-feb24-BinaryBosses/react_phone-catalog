import styled from 'styled-components';

export const StyledCartPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: var(--rstyle1-gray-background);

  @media (min-width: 1200px) {
  }
`;
export const StyledBackHomeButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 16px;

  @media (min-width: 640px) and (max-width: 1199px) {
    padding: 40px 24px 16px;
  }

  @media (min-width: 1200px) {
    padding: 40px 32px 16px;
  }
`;
export const StyledSpan = styled.span`
  //styleName: Small text 12;
  font-family: Mont;
  font-size: 12px;
  font-weight: 700;
  line-height: 15.34px;
  text-align: left;
  color: var(--rstyle1-gray-secondary);
`;

export const StyledH1Title = styled.h1`
  //styleName: Mobile/H1;
  font-family: Mont;
  font-size: 32px;
  font-weight: 800;
  line-height: 41px;
  letter-spacing: -0.01em;
  text-align: left;
  margin: 0 0 32px 16px;
  color: var(--rstyle1-primary);

  @media (min-width: 640px) and (max-width: 1199px) {
    font-size: 48px;
    margin: 0 0 32px 24px;
  }

  @media (min-width: 1200px) {
    font-size: 48px;
    margin: 0 32px 32px;
  }
`;