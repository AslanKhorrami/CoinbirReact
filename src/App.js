import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import "./FontAwsome/index";
// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./Components/NavBar";
import HomeTable from "./Pages/HomeTable";
import HomeTableDescription from "./Pages/HomeTableDescription";
import DividerSkewCC from "./Components/DividerSkewCC";
import DividerSkewC from "./Components/DividerSkewC";
import HomeIntroducing from "./Pages/HomeIntroducing";
import DedicatedApp from "./Pages/DedicatedَApp";
import WhyOfUse from "./Pages/WhyOfUse";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Crypto from "./Pages/Crypto";
import Exchange from "./Pages/Exchange";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FAQ from "./Pages/FAQ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <ScrollUpButton />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomeTable />
            <HomeTableDescription />
            <DividerSkewCC />
            <HomeIntroducing />
            <DividerSkewC />
            <DedicatedApp />
            <DividerSkewCC />
            <WhyOfUse />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/cryptocurrencies">
            <Crypto />
          </Route>
          <Route path="/exchange">
            <Exchange />
          </Route>
          <Route path="/log-in">
            <SignIn />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
