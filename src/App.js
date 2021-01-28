import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import "./FontAwsome/index";
// import logo from "./logo.svg";
import "./App.scss";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Crypto from "./Pages/Crypto";
import Exchange from "./Pages/Exchange";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import FAQ from "./Pages/FAQ";
import Laws from "./Pages/Laws";
import UserDashboard from "./Pages/UserDashboard";
import UserWallet from "./Pages/UserWallet";
import UserAuthentication from "./Pages/UserAuthentication";
import UserTicket from "./Pages/UserTicket";
import UserBankAccounts from "./Pages/UserBankAccounts";
import UserWithdraws from "./Pages/UserWithdraws";
import UserPurchases from "./Pages/UserPurchases";
import UserSales from "./Pages/UserSales";
import UserChangePassword from "./Pages/UserChangePassword";
import Login from "./Admin/Pages/Login";
import Dashboard from "./Admin/Pages/Dashboard";
import UserPurchaseFactorManagement from "./Admin/Pages/UsersPurchaseFactorManagement";
import Cryptocurrencies from "./Admin/Pages/Cryptocurrencies";
import TetherPriceEdit from "./Admin/Pages/TetherPriceEdit";
import PasswordEdit from "./Admin/Pages/PasswordEdit";
import CurrenciesManagement from "./Admin/Pages/CurrenciesManagement";
import Commissions from "./Admin/Pages/Commissions";
import Users from "./Admin/Pages/Users";
import UsersSalesFactorManagement from "./Admin/Pages/UsersSalesFactorManagement";
import UsernameEdit from "./Admin/Pages/UsernameEdit";
import Deposits from "./Admin/Pages/Deposits";
import UploadedDocuments from "./Admin/Pages/UploadedDocuments";
import Tickets from "./Admin/Pages/Tickets";
import FavCoins from "./Admin/Pages/FavCoins";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Admin/Components/ScrollToTop";
import CreateAdmin from "./Admin/Pages/CreateAdmin";
import SetPassword from "./Components/SetPassword";

function App() {
  return (
    <div>
      <ScrollUpButton />
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route path="/cryptocurrencies" component={Crypto}></Route>
          <Route path="/exchange" component={Exchange}></Route>
          <Route path="/log-in" component={SignIn}></Route>
          <Route path="/register" component={SignUp}></Route>
          <Route path="/faq" component={FAQ}></Route>
          <Route path="/laws" component={Laws}></Route>
          <Route exact path="/dashboard" component={UserDashboard}></Route>
          <Route path="/dashboard/wallet" component={UserWallet}></Route>
          <Route
            path="/dashboard/authentication"
            component={UserAuthentication}
          ></Route>
          <Route path="/dashboard/ticket" component={UserTicket}></Route>
          <Route
            path="/dashboard/bank-accounts"
            component={UserBankAccounts}
          ></Route>
          <Route path="/dashboard/withdraws" component={UserWithdraws}></Route>
          <Route path="/dashboard/purchases" component={UserPurchases}></Route>
          <Route path="/dashboard/sales" component={UserSales}></Route>
          <Route
            path="/dashboard/change-password"
            component={UserChangePassword}
          ></Route>
          <Route exact path="/admin" component={Login} />
          <Route path="/admin/dashboard" component={Dashboard}></Route>
          <Route
            path="/admin/users-purchase-factor-management"
            component={UserPurchaseFactorManagement}
          ></Route>
          <Route
            path="/admin/cryptocurrencies"
            component={Cryptocurrencies}
          ></Route>
          <Route path="/admin/tether-edit" component={TetherPriceEdit}></Route>
          <Route path="/admin/password-edit" component={PasswordEdit}></Route>
          <Route
            path="/admin/currencies-management"
            component={CurrenciesManagement}
          ></Route>
          <Route path="/admin/commissions" component={Commissions}></Route>
          <Route path="/admin/users" component={Users}></Route>
          <Route
            path="/admin/users-sales-factor-management"
            component={UsersSalesFactorManagement}
          ></Route>
          <Route path="/admin/username-edit" component={UsernameEdit}></Route>
          <Route path="/admin/deposits" component={Deposits}></Route>
          <Route
            path="/admin/uploaded-documents"
            component={UploadedDocuments}
          ></Route>
          <Route path="/admin/tickets" component={Tickets}></Route>
          <Route path="/admin/fav-coins" component={FavCoins}></Route>
          <Route path="/admin/create-admin" component={CreateAdmin}></Route>
          <Route path="/setpassword" component={SetPassword}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
