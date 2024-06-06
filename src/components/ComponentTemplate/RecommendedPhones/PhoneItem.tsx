import React from 'react';
import StyledComponentPhoneItem from './StyledComponentPhoneItem.ts';

interface PhoneItemProps {
  phone: {
    name: string;
    images: string[];
  };
}

function PhoneItem({ phone }: PhoneItemProps) {
  return (
    <StyledComponentPhoneItem className="phone-item">
      <img src={phone.images[0]} alt={phone.name} className="phone-item__image" />
      <h1 className="phone-item__name">{phone.name}</h1>
    </StyledComponentPhoneItem>
  );
}

export default PhoneItem;
