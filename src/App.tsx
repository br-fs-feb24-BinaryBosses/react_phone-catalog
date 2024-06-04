import React, { useState, useEffect } from "react";
import { Phone } from "./types/types";
import * as Services from "./utils/getPhones";
import PhoneList from "./components/PhonesList/PhonesList";

export const App: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    Services.getPhones()
      .then((fetchedPhones) => {
        setPhones(fetchedPhones);
      })
      .catch((e) => console.log(e))
      .finally();
  }, []);

  return (
    <div>
      <h1>Phones</h1>
      {phones.length > 0 ? (
        <PhoneList phones={phones} />
      ) : (
        <p>Loading phones...</p>
      )}
    </div>
  );
};
