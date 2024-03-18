import { useState } from "react";
import Dropdown from "./Dropdown";
import ExchangeRateCal from "./ExchangeRateCal";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue >= 0) {
      setAmount(inputValue);
    }
  };

  const handleButtonClick = (e) => {
    // e.preventDefault(); acheived by "button" type=button
    setShowResult(true);
  };

  return (
    <div className="container">
      <h2>
        <u>Currency Converter</u>
      </h2>
      <form>
        <div className="Amount">
          <input
            placeholder="Enter amount..."
            type="number"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>

        <Dropdown
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />

        {showResult && (
          <ExchangeRateCal
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            amount={amount}
          />
        )}

        <button
          className="exhnageRateBtn"
          type="button"
          onClick={handleButtonClick}
        >
          Get Exchange Rate
        </button>
      </form>
    </div>
  );
}
