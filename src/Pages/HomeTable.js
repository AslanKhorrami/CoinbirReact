import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";

function HomeTable() {
  const HOMETABLE_API = process.env.REACT_APP_HOMETABLE_API;

  const [Coins, SetCoins] = useState([]);

  useEffect(() => {
    // console.log(HOMETABLE_API)
    axios
      .get(HOMETABLE_API)
      .then(Response.JSON)
      .then((Response) => {
        SetCoins(JSON.parse(Response.data));
        console.log(JSON.parse(Response.data));
      });
  }, [Coins]);

  return (
    <div className="row">
      <h1 className="HomeTableHeader">قیمت لحظه ای رمز ارزهای پایه</h1>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col" className="CryptoName">
                نام رمز ارز
              </th>
              <th scope="col" className="center-align DollarPrice">
                قیمت لحظه ای دلاری
              </th>
              <th scope="col" className="center-align RialPrice">
                قیمت لحظه ای ریالی
              </th>
              <th scope="col" className="center-align Changes">
                تغییرات یک ساعت گذشته
              </th>
              <th scope="col" className="center-align ltr Changes">
                تغییرات 24 ساعت گذشته
              </th>
              <th scope="col" className="center-align ltr Changes">
                تغییرات هفته گذشته
              </th>
              <th scope="col" className="center-align ltr Operation">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {Coins.map((coin, idx) => (
              <tr key={idx}>
                <th scope="row" key={coin.id}>
                  {idx + 1}{" "}
                </th>
                <td key={coin.id}>
                  <img
                    // key={coin.id}
                    src={require(`../Images/HomeTable/${coin.Name}.png`)}
                    alt={`${coin.Name}`}
                  />
                  &nbsp; {coin.Name}
                </td>
                <td className="center-align" key={coin.id}>
                  <NumberFormat
                    value={coin.Price.toFixed(2)}
                    thousandSeparator={","}
                    displayType={"text"}
                  />
                </td>
                <td className="center-align"></td>
                <td
                  className={`center-align ltr ${
                    coin.PercentChange1h > 0 ? "positive" : "negetive"
                  }`}
                  key={coin.id}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.PercentChange1h > 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.PercentChange1h < 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  {coin.PercentChange1h.toFixed(2)}
                </td>
                <td
                  className={`center-align ltr ${
                    coin.PercentChange24h > 0 ? "positive" : "negetive"
                  }`}
                  key={coin.id}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.PercentChange24h > 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.PercentChange24h < 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  {coin.PercentChange24h.toFixed(2)}
                </td>
                <td
                  className={`center-align ltr ${
                    coin.PercentChange7d > 0 ? "positive" : "negetive"
                  }`}
                  key={coin.id}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.PercentChange7d > 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.PercentChange7d < 0 ? "show" : "hide"}`}
                    key={coin.id}
                  />{" "}
                  &nbsp;
                  {coin.PercentChange7d.toFixed(2)}
                </td>
                <td>
                  <button className="BuyButton">خرید</button>
                  <button className="SellButton">فروش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* {Coins.map((coin, idx) => {
        return (
          <p className="left-align">
            آخرین به روز رسانی قیمت ها:{" "}
            {coin.CoinLogID === 394352 ? coin.CreateDate : "NULL"}
          </p>
        );
      })} */}
    </div>
  );
}

export default HomeTable;
