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
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const dateValue = store.sort(
      (a, b) => Date.parse(a.date) - Date.parse(b.date)
    );
    console.log(dateValue, "datavaleeeeeeeeeeee");
    setFilterData(dateValue);
  }, [store]);

  useEffect(() => {
    const filter = store.filter((val) =>
      val.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilterData(filter);
  }, [search, store]);

  const categoryColors = {
    food: "green",
    transportation: "blue",
    entertainment: "red",
    shopping: "purple",
    bills: "gray",
    health: "#2596be",
    other: "#fddda0",
  };

  return (
    <>
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
                <span>Category: </span>
                <span
                  style={{
                    backgroundColor: categoryColors[val.category],
                    color: "white",
                  }}
                >
                  {val.category}
                </span>

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
