import React, { useContext, useEffect, useState } from "react";
import { CreateContextForm } from "../contextpage/ExpencFormContext";
import { useNavigate } from "react-router-dom";
import "../../style/Cart.css";
// Layout: Card-based or table format
// Each Entry Shows:Amount with currency formatting
// Description
// Category with color-coded badge
// Date in readable format
// Delete button
// Features:Sort by date (newest first by default)
// Filter by category
// Search by description
// Edit existing expenses (bonus feature)

const ExpenseList = () => {
  const navigate = useNavigate();
  const { store, handleDel, handleEdit } = useContext(CreateContextForm);
  const [show, setShow] = useState(true);
//   const [sortDate, setSortDate] = useState("");
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const dateValue = store.sort(
      (a, b) => Date.parse(b.date) - Date.parse(a.date)
    );
    console.log(dateValue, "datavaleeeeeeeeeeee");
    setFilterData(dateValue);
  }, []);

  useEffect(() => {
    const filter = store.filter((val) =>
      val.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filter);
  }, []);

  return (
    <>
      <label htmlFor="">Search</label>
      <input
        type="text"
        placeholder="serach category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cartlist">
        {filterData.map((val) => {
          return (
            <div className="cart">
              <ul key={val.id}>
                <li>
                  <span>Amount: </span> ₹ {val.amount}
                </li>
                <li>
                  <span>Description: </span>
                  {val.description}
                </li>
                <li>
                  <span>Category: </span>
                  {val.category}
                </li>
                <li>
                  <span>Date: </span> {val.date}
                </li>
                <button onClick={() => handleDel(val)}>Delete</button>
                <button
                  onClick={() => {
                    handleEdit(val);
                    navigate("/expenceform");
                  }}
                >
                  Edit
                </button>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ExpenseList;
