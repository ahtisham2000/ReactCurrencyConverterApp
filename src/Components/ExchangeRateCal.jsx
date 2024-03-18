import { useEffect, useState } from "react";

export default function ExchangeRateCal({ fromCurrency, toCurrency, amount }) {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetch(
      "https://openexchangerates.org/api/latest.json?app_id=8689a7e521d044feac7d5d5e9a7c3c7f"
    )
      .then((response) => response.json())
      .then((data) => {
        const rates = data.rates;
        if (rates && fromCurrency && toCurrency) {
          const fromRate = rates[fromCurrency];
          const toRate = rates[toCurrency];
          if (fromRate && toRate) {
            const calculatedRate = (toRate / fromRate) * amount;
            setExchangeRate(calculatedRate.toFixed(2));
          }
        }
      });
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div>
      {exchangeRate && (
        <div className="msgDiv">
          {amount} {fromCurrency} = {exchangeRate} {toCurrency}
        </div>
      )}
    </div>
  );
}
