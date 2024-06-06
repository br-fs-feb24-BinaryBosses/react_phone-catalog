import styled from 'styled-components';

const StyledComponentPhoneItem = styled.div`
  width: 212px;
  margin: 16px 0px;
  padding: 32px 0px;
  border-radius: 8px 0px 0px 0px;
  border: 1px;
  background-color: #fff;

  .phone-item__image {
    height: 108px;
    width: 148px;
    object-fit: cover;
  }

  .phone-item__name {
    width: 100vw;
    font-size: 0.8em;
    padding: 8px;
  }
`;

export default StyledComponentPhoneItem;
