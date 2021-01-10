import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import "../Styles/FavCoins.scss";
import { Container, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";

function FavCoins() {
  const [allCoins, setAllCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [favCoins, setFavCoins] = useState([]);

  useEffect(() => {
    const auth = localStorage.getItem("accessToken");
    axios({
      method: "get",
      url: "https://coinbit-backend.com/api/Coin/getfav",
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    }).then((Response) => {
      setFavCoins(Response.data);
    });
  }, [favCoins]);

  useEffect(() => {
    axios
      .get("https://coinbit-backend.com/api/Coin/get")
      .then(Response.JSON)
      .then((Response) => {
        setAllCoins(Response.data);
      });
    //eslint-disable-next-line
  }, []);

  function SetSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setFilteredCoins(
      allCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [allCoins, search]);

  const itemSelect = (event) => {
    const auth = localStorage.getItem("accessToken");
    event.persist();
    // console.log(event.target.attributes.value.nodeValue);
    axios({
      method: "post",
      url: `https://coinbit-backend.com/api/FavCoins/addfavcoin?coinId=${event.target.attributes.value.nodeValue}`,
      headers: { Authorization: `Bearer ${auth}` },
    });
  };

  const deleteCoinHandeler = (event) => {
    const auth = localStorage.getItem("accessToken");
    event.persist();
    axios({
      method: "post",
      url: `https://coinbit-backend.com/api/FavCoins/removefavcoin?coinId=${event.target.attributes.value.nodeValue}`,
      headers: { Authorization: `Bearer ${auth}` },
    });
  };

  function isAuthenicated() {
    const accessToken = localStorage.getItem("accessToken");
    const role = localStorage.getItem("role");
    if (accessToken && accessToken.length > 10 && role === "admin") {
      return true;
    }
    // return token && token.length > 10;
  }
  const isAlreadyAuthennicated = isAuthenicated();
  return (
    <div>
      {!isAlreadyAuthennicated ? (
        <Redirect to={{ pathname: "/admin" }} />
      ) : (
        <div className="admin-panel-side-navbar">
          <Container fluid={true}>
            <Row>
              <Col lg="2">
                <SideNavBar />
              </Col>
              <Col lg="10" className="AdminPanelArea">
                <Row>
                  <h1>صفحه کوین های منتخب</h1>
                </Row>
                <Row>
                  <Col lg="6">
                    <Row>
                      <input
                        type="text"
                        placeholder="انتخاب کوین ها"
                        onChange={SetSearch}
                        className="searchCoins"
                      />
                    </Row>
                    <Row>
                      {filteredCoins.map((coin, idx) => (
                        <ul key={idx} className="filteredCoins">
                          <li onClick={itemSelect} value={coin.coinId}>
                            <img
                              src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.coinId}.png`}
                              alt={`${coin.name}`}
                            />
                            {coin.name}
                          </li>
                        </ul>
                      ))}
                    </Row>
                  </Col>
                  <Col lg="6">
                    <Row>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">نام ارز</th>
                              <th scope="col">عملیات</th>
                            </tr>
                          </thead>
                          <tbody>
                            {favCoins.map((favcoin, idx) => (
                              <tr key={favcoin.coinId}>
                                <th scope="row">{idx + 1}</th>
                                <td>
                                  <img
                                    src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${favcoin.coinId}.png`}
                                    alt={`${favcoin.name}`}
                                    className="coinLogo"
                                  />
                                  {favcoin.name}
                                </td>
                                <td>
                                  <button
                                    onClick={deleteCoinHandeler}
                                    value={favcoin.coinId}
                                  >
                                    حذف
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}

export default FavCoins;
