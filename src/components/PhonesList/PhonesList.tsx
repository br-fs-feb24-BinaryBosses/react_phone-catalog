import React from "react";
import { Phone } from "../../types/types";

export type PhoneListProps = {
  phones: Phone[];
}

export const PhoneList: React.FC<PhoneListProps> = ({ phones }) => {
  return (
    <ul>
      {phones.map((phone) => (
        <li key={phone.id}>
          {phone.name}
          {/* {change property as needed} */}
        </li>
      ))}
    </ul>
  );
};

export default PhoneList;
