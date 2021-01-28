import React from "react";
import "../Styles/SideNavBar.scss";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink
          to="/admin/dashboard"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          صفحه اصلی
        </NavLink>
        <NavLink
          to="/admin/users-purchase-factor-management"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          فاکتورهای فروش
        </NavLink>
        <NavLink
          to="/admin/cryptocurrencies"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          ارزهای دیجیتال
        </NavLink>
        <NavLink
          to="/admin/tether-edit"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          ارزش تتر
        </NavLink>
        <NavLink
          to="/admin/password-edit"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          تغییر رمز عبور
        </NavLink>
        <NavLink
          to="/admin/currencies-management"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          موجودی ارزها
        </NavLink>
        <NavLink
          to="/admin/commissions"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          کارمزدها
        </NavLink>
        <NavLink
          to="/admin/users"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          کاربران
        </NavLink>
        <NavLink
          to="/admin/users-sales-factor-management"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          فاکتورهای خرید
        </NavLink>
        <NavLink
          to="/admin/username-edit"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          تغییر نام کاربری
        </NavLink>
        <NavLink
          to="/admin/deposits"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          درخواست های برداشت
        </NavLink>
        <NavLink
          to="/admin/uploaded-documents"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          اسناد بارگذاری شده
        </NavLink>
        <NavLink
          to="/admin/tickets"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          تیکت ها
        </NavLink>
        <NavLink
          to="/admin/fav-coins"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          کوین های منتخب
        </NavLink>
        <NavLink
          to="/admin/create-admin"
          className="nav-link"
          activeClassName="admin-active-link"
        >
          ایجاد ادمین جدید
        </NavLink>
      </Nav>
    </Navbar>
  );
}

export default SideNavBar;
