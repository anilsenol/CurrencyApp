import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_muL8Tv9yMHpYS49Yl6OIAYFIkzrvRkBpxXspgnhd";

function Currency() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [respond, setRespond] = useState();

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    setRespond((response.data.data[toCurrency] * amount).toFixed(2));
  };

  return (
    <div className="currency-div">
      <div>
        <h4>Change Currency</h4>
      </div>
      <div className="currency-changing">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-selector"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
          <option>CAD</option>
          <option>GBP</option>
          <option>CZK</option>
          <option>JPY</option>
          <option>BGN</option>
          <option>AUD</option>
        </select>

        <FaArrowRight
          style={{
            fontSize: "25px",
            marginLeft: "10px",
            marginRight: "10px",
            color: "#6aff00",
          }}
        />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-selector"
        >
          <option>EUR</option>
          <option>USD</option>
          <option>TRY</option>
          <option>CAD</option>
          <option>GBP</option>
          <option>CZK</option>
          <option>JPY</option>
          <option>BGN</option>
          <option>AUD</option>
        </select>
        <input value={respond} type="number" className="result" />
      </div>
      <button onClick={exchange} className="exchange-btn">
        Exchange
      </button>
    </div>
  );
}

export default Currency;
