import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";

function HomeTable() {
  const [Coins, SetCoins] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Coin/getfav",
    }).then((Response) => {
      SetCoins(Response.data);
    });
  }, [Coins]);

  return (
    <div className="row">
      <h2 className="HomeTableHeader">قیمت لحظه ای رمز ارزهای پایه</h2>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="CryptoName">
                #
              </th>
              <th scope="col" className="CryptoName">
                نام رمز ارز
              </th>
              <th scope="col" className="center-align DollarPrice">
                قیمت دلاری
              </th>
              <th scope="col" className="center-align RialPrice">
                قیمت ریالی
              </th>
              <th scope="col" className="center-align Changes">
                یک ساعت گذشته
              </th>
              <th scope="col" className="center-align ltr Changes TabletView">
                24 ساعت گذشته
              </th>
              <th scope="col" className="center-align ltr Changes TabletView">
                هفته گذشته
              </th>
              <th scope="col" className="center-align ltr Operation">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {Coins.map((coin, idx) => (
              <tr key={coin.coinId}>
                <th scope="row">{idx + 1} </th>
                <td className="CoinName">
                  <img
                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.coinId}.png`}
                    alt={`${coin.Name}`}
                  />
                  &nbsp; <span className="Symbol">{coin.symbol}</span>{" "}
                  {coin.name}
                </td>
                <td className="center-align">
                  <NumberFormat
                    value={coin.price.toFixed(2)}
                    thousandSeparator={","}
                    displayType={"text"}
                  />
                </td>
                <td className="center-align">
                  <NumberFormat
                    value={((coin.price * coin.tetherPriceInRial) / 10).toFixed(
                      0
                    )}
                    thousandSeparator={","}
                    displayType={"text"}
                  />
                </td>
                <td
                  className={`center-align ltr ${
                    coin.percentChange1h > 0 ? "positive" : "negetive"
                  }`}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.percentChange1h > 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.percentChange1h < 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  {coin.percentChange1h.toFixed(2)}
                </td>
                <td
                  className={`center-align ltr TabletView ${
                    coin.percentChange24h > 0 ? "positive" : "negetive"
                  }`}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.percentChange24h > 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.percentChange24h < 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  {coin.percentChange24h.toFixed(2)}
                </td>
                <td
                  className={`center-align ltr TabletView ${
                    coin.percentChange7d > 0 ? "positive" : "negetive"
                  }`}
                >
                  <FontAwesomeIcon
                    icon="long-arrow-alt-up"
                    className={`${coin.percentChange7d > 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  <FontAwesomeIcon
                    icon="long-arrow-alt-down"
                    className={`${coin.percentChange7d < 0 ? "show" : "hide"}`}
                  />{" "}
                  &nbsp;
                  {coin.percentChange7d.toFixed(2)}
                </td>
                <td className="BuySellButtons">
                  <button className="BuyButton">
                    <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
                    خرید
                  </button>
                  <button className="SellButton">
                    <FontAwesomeIcon icon={["far", "money-bill-alt"]} />
                    &nbsp;فروش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeTable;
