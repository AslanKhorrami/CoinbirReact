import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NumberFormat from "react-number-format";
import { Row, Container } from "reactstrap";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Crypto() {
  const [AllCoins, SetAllCoins] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Coin/get",
    }).then((Response) => {
      SetAllCoins(Response.data);
    });
  }, [AllCoins]);
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
                    <th scope="row">{idx + 1} </th>
                    <td>
                      <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.coinId}.png`}
                        alt={`${coin.Name}`}
                      />
                      &nbsp; {coin.name}
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
                        value={(
                          (coin.price * coin.tetherPriceInRial) /
                          10
                        ).toFixed(0)}
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
                        className={`${
                          coin.percentChange1h > 0 ? "show" : "hide"
                        }`}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange1h < 0 ? "show" : "hide"
                        }`}
                      />{" "}
                      &nbsp;
                      {coin.percentChange1h.toFixed(2)}
                    </td>
                    <td
                      className={`center-align ltr ${
                        coin.percentChange24h > 0 ? "positive" : "negetive"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon="long-arrow-alt-up"
                        className={`${
                          coin.percentChange24h > 0 ? "show" : "hide"
                        }`}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange24h < 0 ? "show" : "hide"
                        }`}
                      />{" "}
                      &nbsp;
                      {coin.percentChange24h.toFixed(2)}
                    </td>
                    <td
                      className={`center-align ltr ${
                        coin.percentChange7d > 0 ? "positive" : "negetive"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon="long-arrow-alt-up"
                        className={`${
                          coin.percentChange7d > 0 ? "show" : "hide"
                        }`}
                      />{" "}
                      &nbsp;
                      <FontAwesomeIcon
                        icon="long-arrow-alt-down"
                        className={`${
                          coin.percentChange7d < 0 ? "show" : "hide"
                        }`}
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
