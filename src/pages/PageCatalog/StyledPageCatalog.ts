import styled from 'styled-components';
import {
  letterStyleH1Mobile,
  letterStyleBodyTextDesktoAndTable,
  letterStyleSmallTextDesktoAndTable,
  letterStyleButtonsDesktoAndTable,
} from '../../styles/GlobalStyles.ts';

const StyledPageCatalog = styled.div`
  .page-catalog {
    margin: 0;

    &__top-section {
      display: flex;
      flex-direction: column;
      padding-top: 64px;
      padding-left: 16px;
      padding-right: 16px;

      @media (min-width: 640px) {
        padding-right: 24px;
        padding-left: 24px;
      }

      @media (min-width: 1200px) {
        padding-right: 32px;
        padding-left: 32px;
      }

      &-title {
        margin: 0;
        margin-bottom: 8px;
        ${letterStyleH1Mobile};
      }

      &-subtitle {
        ${letterStyleBodyTextDesktoAndTable}
        color: #89939A;
        margin: 0;
        margin-bottom: 32px;

        @media (min-width: 640px) {
          margin-bottom: 40px;
        }
      }
    }

    &__select {
      display: flex;
      gap: 16px;
      padding-left: 16px;
      padding-right: 16px;
      margin-bottom: 24px;

      @media (min-width: 640px) {
        padding-right: 24px;
        padding-left: 24px;
      }

      @media (min-width: 1200px) {
        padding-right: 32px;
        padding-left: 32px;
      }

      &-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        @media (min-width: 640px) {
          align-items: flex-start;
        }
      }

      &-label {
        ${letterStyleSmallTextDesktoAndTable};
        color: #89939a;
        margin-bottom: 4px;
      }

      &-box {
        width: 136px;
        height: 40px;
        ${letterStyleButtonsDesktoAndTable};
        padding: 4px;
        border-radius: 8px;
        border: 1px solid #b4bdc3;
        box-sizing: border-box;
      }

      &-box--selected {
        @media (min-width: 640px) {
          width: 187px;
        }
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 40px;
      padding-left: 16px;
      padding-right: 16px;

      @media (min-width: 640px) {
        padding-right: 24px;
        padding-left: 24px;
        gap: 16px;
      }

      @media (min-width: 1200px) {
        padding-right: 32px;
        padding-left: 32px;
      }

      &-card {
        width: 287px;
        height: 440px;

        background: #fff;
        border: 10px solid #ddd;
        border-radius: 8px;
        box-sizing: border-box;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        @media (min-width: 640px) {
          width: 288px;
          height: 506px;
          max-width: calc();
        }

        @media (min-width: 768px) {
          width: 229px;
          height: 506px;
        }

        @media (min-width: 1200px) {
          width: 272px;
          height: 506px;
        }
      }
    }

    &__pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
      margin-bottom: 64px;
      padding-left: 16px;
      padding-right: 16px;

      @media (min-width: 640px) {
        margin-top: 40px;
      }

      @media (min-width: 1200px) {
        margin-bottom: 80px;
      }

      &-button {
        width: 32px;
        height: 32px;
        border: 1px solid #e2e6e9;
        border-radius: 48px;
        box-sizing: border-box;
        font-size: 14px;
        cursor: pointer;

        &--isarrow {
          margin: 0 16px;
          border: 1px solid #b4bdc3;
        }

        &--filled {
          background-color: #0f0f11;
          color: #ffffff;
        }

        &:hover {
          border: 1px solid #0f0f11;
        }
      }
    }
  }
`;

export default StyledPageCatalog;
