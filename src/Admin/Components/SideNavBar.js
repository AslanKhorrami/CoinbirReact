import React from "react";
import "../Styles/SideNavBar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function SideNavBar() {
  //   const [ShowMenu, SetShowMenu] = useState(false);
  //   const maskTransitions = useTransition(ShowMenu, null, {
  //     from: { opacity: 0 },
  //     enter: { opacity: 1 },
  //     leave: { opacity: 0 },
  //   });
  //   const menuTransitions = useTransition(ShowMenu, null, {
  //     from: { opacity: 0, transform: "translateX(100%)" },
  //     enter: { opacity: 1, transform: "translateX(0%)" },
  //     leave: { opacity: 0, transform: "translateX(100%)" },
  //   });
  return (
    <Navbar expand="lg" className="SideNavBar">
      <Link to="/admin/dashboard" className="navbar-brand">
        <img src={require("../Images/logo.png")} alt="Coinbit Logo"></img>
      </Link>
      <Nav>
        <Link to="/admin/dashboard" className="nav-link">
          صفحه اصلی
        </Link>
        <Link to="/admin/users-purchase-factor-management" className="nav-link">
          فاکتورهای فروش
        </Link>
        <Link to="/admin/cryptocurrencies" className="nav-link">
          ارزهای دیجیتال
        </Link>
        <Link to="/admin/tether-edit" className="nav-link">
          ارزش تتر
        </Link>
        <Link to="/admin/password-edit" className="nav-link">
          تغییر رمز عبور
        </Link>
        <Link to="/admin/currencies-management" className="nav-link">
          موجودی ارزها
        </Link>
        <Link to="/admin/commissions" className="nav-link">
          کارمزدها
        </Link>
        <Link to="/admin/users" className="nav-link">
          کاربران
        </Link>
        <Link to="/admin/users-sales-factor-management" className="nav-link">
          فاکتورهای خرید
        </Link>
        <Link to="/admin/username-edit" className="nav-link">
          تغییر نام کاربری
        </Link>
        <Link to="/admin/deposits" className="nav-link">
          درخواست های برداشت
        </Link>
        <Link to="/admin/uploaded-documents" className="nav-link">
          اسناد بارگذاری شده
        </Link>
        <Link to="/admin/tickets" className="nav-link">
          تیکت ها
        </Link>
      </Nav>
    </Navbar>
  );
}

export default SideNavBar;
