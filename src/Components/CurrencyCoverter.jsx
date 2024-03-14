import { useState } from "react";
import Dropdown from "./Dropdown";
import ExchangeRateCal from "./ExchangeRateCal";

export default function CurrencyConverter() {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="container">
      <h2>Currency Converter</h2>
      <form>
        <div className="Amount">
          <input
            placeholder="Enter amount..."
            type="text"
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
            amount={parseFloat(amount)}
          />
        )}

        <button className="exhnageRateBtn" onClick={handleButtonClick}>Get Exchange Rate</button>
      </form>
    </div>
  );
}
