import styled from 'styled-components';
import { letterStyleH2DesktoAndTable, letterStyleH2Mobile } from '../../../styles/GlobalStyles.ts';

const StyledComponentRecommendedPhones = styled.div`
  .recommended-phones {
    margin: 0;

    &__upper-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      ${letterStyleH2Mobile};
      padding-left: 16px;

      @media (min-width: 640px) {
        padding-left: 24px;
        ${letterStyleH2DesktoAndTable}
      }

      @media (min-width: 1200px) {
        padding-left: 32px;
      }
    }

    &__buttons-wrapped {
      display: flex;
      gap: 16px;
      padding-right: 16px;

      @media (min-width: 640px) {
        padding-right: 24px;
      }

      @media (min-width: 1200px) {
        padding-right: 32px;
      }
    }

    &__button {
      width: 32px;
      height: 32px;
      background-color: #fafbfc;
      border: 1px solid #b4bdc3;
      border-radius: 48px;
      cursor: pointer;

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }

    &__list {
      display: flex;
      margin-top: 12px;
      overflow: hidden;
      transition: transform 0.5s ease;
    }

    &__card {
      width: 212px;
      height: 439px;
      padding: 32px 0px 0px 0px;
      gap: 8px;
      border-radius: 8px 0px 0px 0px;
      border: 1px 0px 0px 0px;
      opacity: 0px;

      @media (min-width: 640px) {
        width: 237px;
        height: 512px;
      }

      @media (min-width: 1200px) {
        width: 272px;
        height: 506px;
      }
    }
  }
`;

export default StyledComponentRecommendedPhones;
