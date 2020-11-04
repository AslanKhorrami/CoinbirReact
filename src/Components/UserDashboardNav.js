import React from "react";
import { Link } from "react-router-dom";

function UserDashboardNav() {
  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">
          حساب کاربری
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/wallet">
          کیف پول
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/authentication">
          احراز هویت
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/ticket">
          تیکت
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/bank-accounts">
          حساب های بانکی
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/withdraws">
          برداشت های من
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/purchases">
          خریدهای من
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/sales">
          فروش های من
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard/change-password">
          تغییر رمز عبور
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">
          خروج
        </Link>
      </li>
    </ul>
  );
}

export default UserDashboardNav;
