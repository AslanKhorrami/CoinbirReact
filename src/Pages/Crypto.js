import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import { Row, Container } from "reactstrap";

function Crypto() {
  const CRYPTO_PAGE_API = process.env.REACT_APP_CRYPTO_PAGE_API;

  const [AllCoins, SetAllCoins] = useState([]);

  useEffect(() => {
    console.log(CRYPTO_PAGE_API)
    axios
      .get(CRYPTO_PAGE_API)
      .then(Response.JSON)
      .then((Response) => {
        SetAllCoins(JSON.parse(Response.data));
        console.log(JSON.parse(Response.data));
      });
  }, [AllCoins]);
  return (
    <Container fluid={true}>
      <Row>
        <h1 className="HomeTableHeader">قیمت لحظه ای رمز ارزها</h1>
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
              {AllCoins.map((coin, idx) => (
                <tr key={idx}>
                  <th scope="row" key={coin.id}>
                    {idx + 1}{" "}
                  </th>
                  <td key={coin.id}>
                    {/* <img
                      //   key={coin.id}
                      src={require(`../Images/AllCrypto/${coin.Name}.png`)}
                      alt={`${coin.Name}`}
                    /> */}
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
                      className={`${
                        coin.PercentChange1h > 0 ? "show" : "hide"
                      }`}
                      key={coin.id}
                    />{" "}
                    &nbsp;
                    <FontAwesomeIcon
                      icon="long-arrow-alt-down"
                      className={`${
                        coin.PercentChange1h < 0 ? "show" : "hide"
                      }`}
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
                      className={`${
                        coin.PercentChange24h > 0 ? "show" : "hide"
                      }`}
                      key={coin.id}
                    />{" "}
                    &nbsp;
                    <FontAwesomeIcon
                      icon="long-arrow-alt-down"
                      className={`${
                        coin.PercentChange24h < 0 ? "show" : "hide"
                      }`}
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
                      className={`${
                        coin.PercentChange7d > 0 ? "show" : "hide"
                      }`}
                      key={coin.id}
                    />{" "}
                    &nbsp;
                    <FontAwesomeIcon
                      icon="long-arrow-alt-down"
                      className={`${
                        coin.PercentChange7d < 0 ? "show" : "hide"
                      }`}
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
      </Row>
    </Container>
  );
}

export default Crypto;
