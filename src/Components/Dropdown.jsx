import { useEffect, useState } from "react";
import arrow from "../Assests/arrow.png";

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
      <div className="From">
        <p>From</p>
        <div className="select-container">
          <select name="from" onChange={handleFromCurrencyChange}>
            {countryList()}
          </select>
        </div>
      </div>
      <img className="ArrowImg" src={arrow} alt="arrow.png" />
      <div className="To">
        <p>To</p>
        <div className="select-container">
          <select name="to" onChange={handleToCurrencyChange}>
            {countryList()}
          </select>
        </div>
      </div>
    </div>
  );
}
