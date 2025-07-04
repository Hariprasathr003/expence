import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/Cart.css";
import { CreateContextForm } from "../contextpage/ExpenseFormContext";

const ExpenseList = () => {
  const navigate = useNavigate();
  const { store, handleDel, handleEdit } = useContext(CreateContextForm);
  const [show, setShow] = useState(true);

  const [model, setModel] = useState(true);
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

      <button onClick={() => setModel(!model)}>Model</button>
      {!model && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modalContent">
            <h2>Hello Modal</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              animi laudantium voluptate at consectetur officiis enim! Ipsa,
              nam? Pariatur quisquam labore eum id consequuntur nostrum non
              voluptatem commodi odio similique!
            </p>
            <button className="closeModal" onClick={() => setModel(!model)}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setShow(!show)}>Table View</button>

      {!show && (
        <div className="tableview">
          <table>
            <thead>
              <tr>
                <th>Amount</th>
                <th>Description</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((val, index) => (
                <tr key={index}>
                  <td>{val.amount}</td>
                  <td>{val.description}</td>
                  <td>{val.category}</td>
                  <td>{val.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
                    navigate("/expenseform");
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
