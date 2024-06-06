import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 64px auto;
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
