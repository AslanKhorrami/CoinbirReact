import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNavBar from "../Components/SideNavBar";
import "../Styles/AdminPanelArea.scss";
import { Container, Row, Col } from "reactstrap";

function FavCoins() {
  const [allCoins, setAllCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [search, setSearch] = useState("");
  // const [selectedCoins, setSelectedCoins] = useState([]);
  let selectedCoins = [];

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

  function itemSelect(e) {
    e.persist();
    // console.log(e.target.attributes.value.nodeValue);

    let i;
    for (i in allCoins) {
      if (e.target.attributes.value.nodeValue === allCoins[i].name) {
        console.log(allCoins[i].name);
        selectedCoins.push(allCoins[i]);
        // setSelectedCoins([...selectedCoins, allCoins[i]]);
        // console.log(selectedCoins);
        // if (selectedCoins.indexOf(allCoins[i]) < 0) {
        //   selectedCoins.push(allCoins[i]);
        // }
      }
    }
    return selectedCoins;
  }

  console.log(selectedCoins);
  return (
    <div className="admin-panel-side-navbar">
      <Container fluid={true}>
        <Row>
          <Col lg="2">
            <SideNavBar />
          </Col>
          <Col lg="10" className="AdminPanelArea">
            <h1>صفحه کوین های منتخب</h1>
            {selectedCoins}
            <Row>
              <input
                type="text"
                placeholder="انتخاب کوین ها"
                onChange={SetSearch}
              />
              {search}
            </Row>
            <Row>
              {filteredCoins.map((coin, idx) => (
                <ul key={idx}>
                  <li onClick={itemSelect} value={coin.name}>
                    {coin.name}
                  </li>
                </ul>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FavCoins;
