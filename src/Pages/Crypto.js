import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import { Row, Container } from "reactstrap";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Crypto() {
  const CRYPTO_PAGE_API = process.env.REACT_APP_CRYPTO_PAGE_API;

  const [AllCoins, SetAllCoins] = useState([]);

  useEffect(() => {
    console.log(CRYPTO_PAGE_API);
    axios
      .get(CRYPTO_PAGE_API, { Accept: "application/json" })
      .then(Response.JSON)
      .then((Response) => {
        SetAllCoins(Response.data);
        console.log(Response.data);
        const Interval = setInterval(() => {
          axios
            .get(CRYPTO_PAGE_API)
            .then(Response.JSON)
            .then((Response) => {
              SetAllCoins(Response.data);
              console.log(Response.data);
            });
        }, 60000);
        return () => clearInterval(Interval);
      });
  }, []);
  return (
    <>
      <NavBar />
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
                  <tr key={coin.id}>
                    <th scope="row" key={coin.id}>
                      {idx + 1}{" "}
                    </th>
                    <td key={coin.id}>
                      {/* <img
                      //   key={coin.id}
                      src={require(`../Images/AllCrypto/${coin.Name}.png`)}
                      alt={`${coin.Name}`}
                    /> */}
                      &nbsp; {coin.name}
                    </td>
                    <td className="center-align" key={coin.id}>
                      <NumberFormat
                        value={coin.price.toFixed(2)}
                        thousandSeparator={","}
                        displayType={"text"}
                      />
                    </td>
                    <td className="center-align"></td>
                    <td
                      className={`center-align ltr ${
                        coin.percentChange1h > 0 ? "positive" : "negetive"
                      }`}
                      key={coin.id}
                    >
                      <FontAwesomeIcon
                        icon="long-arrow-alt-up"
                        className={`${
                          coin.percentChange1h > 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange1h < 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      {coin.percentChange1h.toFixed(2)}
                    </td>
                    <td
                      className={`center-align ltr ${
                        coin.percentChange24h > 0 ? "positive" : "negetive"
                      }`}
                      key={coin.id}
                    >
                      <FontAwesomeIcon
                        icon="long-arrow-alt-up"
                        className={`${
                          coin.percentChange24h > 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange24h < 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      {coin.percentChange24h.toFixed(2)}
                    </td>
                    <td
                      className={`center-align ltr ${
                        coin.percentChange7d > 0 ? "positive" : "negetive"
                      }`}
                      key={coin.id}
                    >
                      <FontAwesomeIcon
                        icon="long-arrow-alt-up"
                        className={`${
                          coin.percentChange7d > 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange7d < 0 ? "show" : "hide"
                        }`}
                        key={coin.id}
                      />{" "}
                      &nbsp;
                      {coin.percentChange7d.toFixed(2)}
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
        <Footer />
      </Container>
    </>
  );
}

export default Crypto;
