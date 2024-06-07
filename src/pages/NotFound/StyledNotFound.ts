import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  margin: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    width: 380px;
    height: auto;
    h1 {
      //styleName: Desktop & Tablet/H1;
      font-family: Mont;
      font-size: 20px;
      font-weight: 800;
      line-height: 56px;
      letter-spacing: -0.01em;
      text-align: center;
    }
  }
`;

export default StyledNotFound;
