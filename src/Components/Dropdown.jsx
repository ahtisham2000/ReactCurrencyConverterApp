import { useEffect, useState } from "react";
import arrow from "../Assests/arrow.png";
import CountryDropdown from "./CountryDropdown";

export default function Dropdown({ setFromCurrency, setToCurrency }) {
  const [currencies, setCurrencies] = useState(null);

  useEffect(() => {
    fetch("https://openexchangerates.org/api/currencies.json")
      .then((response) => response.json())
      .then((data) => setCurrencies(data));
  }, []);

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const countryList = () => {
    const options = [];
    for (const currencyCode in currencies) {
      options.push(
        <option key={currencyCode} value={currencyCode}>
          {`${currencyCode} - ${currencies[currencyCode]}`}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="dropdown">
      <CountryDropdown
        countryList={countryList}
        handleCountryChange={handleFromCurrencyChange}
      />
      <img className="ArrowImg" src={arrow} alt="arrow.png" />
      <CountryDropdown
        countryList={countryList}
        handleCountryChange={handleToCurrencyChange}
      />
    </div>
  );
}
