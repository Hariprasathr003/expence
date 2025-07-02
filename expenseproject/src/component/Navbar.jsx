import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="expenseform">ExpenseForm</Link>
          </li>
          <li>
            <Link to="expenselist">ExpenseList</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
