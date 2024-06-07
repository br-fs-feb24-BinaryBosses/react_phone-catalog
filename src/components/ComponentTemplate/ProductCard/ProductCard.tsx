import React from 'react';
import {
  StyledButton,
  StyledDescription,
  StyledHeart,
  StyledLine,
  StyledProductButtonLabel,
  StyledProductCard,
  StyledProductDescription,
  StyledProductDetailDescription,
  StyledProductDetailTitle,
  StyledProductDetails,
  StyledProductImage,
  StyledProductLabel,
  StyledProductPrice,
  StyledProductTitle,
  StyledTitle,
} from './StyledComponentProductCard.ts';

function ProductCard() {
  return (
    <StyledProductCard className="product-card">
      <StyledProductLabel className="product-card__label">
        <StyledProductImage
          className="product-card__image"
          src="public/img/phones/apple-iphone-14-pro/gold/00.webp"
        />
        <StyledProductDescription className="product-card__description">
          <StyledProductTitle className="product-card__description-title">
            Apple iPhone 14 Pro 128GB Silver (MQ023)
          </StyledProductTitle>
          <StyledProductPrice className="product-card__description-price">$999</StyledProductPrice>
        </StyledProductDescription>
        <StyledLine className="product-card__custom-line" />
        <StyledProductDetails className="product-card__details">
          <StyledProductDetailTitle className="product-card__details-title">
            <StyledTitle className="product-card__details-title-content">Screen</StyledTitle>
            <StyledTitle className="product-card__details-title-content">Capacity</StyledTitle>
            <StyledTitle className="product-card__details-title-content">RAM</StyledTitle>
          </StyledProductDetailTitle>
          <StyledProductDetailDescription className="product-card__details-description">
            <StyledDescription className="product-card__details-description-content">{`6.1" OLED`}</StyledDescription>
            <StyledDescription className="product-card__details-description-content">
              128 GB
            </StyledDescription>
            <StyledDescription className="product-card__details-description-content">
              6 GB
            </StyledDescription>
          </StyledProductDetailDescription>
        </StyledProductDetails>
        <StyledProductButtonLabel className="product-card__btn-label">
          <StyledButton className="product-card__btn">Add to cart</StyledButton>
          <StyledHeart
            className="product-card__btn-favorite"
            src="public/img/EmptyHeart.svg"
            alt="empty heart"
          />
        </StyledProductButtonLabel>
      </StyledProductLabel>
    </StyledProductCard>
  );
}

export default ProductCard;
