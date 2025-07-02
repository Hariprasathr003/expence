import React, { useContext } from "react";
import { CreateContextForm } from "../contextpage/ExpencFormContext";
import "../../style/Dashboard.css";
import { Chart } from "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";

// Total Spending: Current month, week, and all-time
// Category Breakdown: Show spending by category
// Recent Activity: Last 5-10 transactions

const Dashboard = () => {
  const { store } = useContext(CreateContextForm);

  const allTimeTotal = store.reduce((acc, val) => acc + Number(val.amount), 0);

  const recentActivity = store
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    .slice(0, 5);

  const categoryBreak = store.reduce((acc, val) => {
    const category = val.category.toLowerCase();
    acc[category] = (acc[category] || 0) + Number(val.amount);
    return acc;
  }, {});

  console.log(Object.entries(categoryBreak), "categgggggggggggg");

  return (
    <>
      <div className="dashboard">
        <h1 className="title">Dashboard</h1>
        <h1 className="dashLen">Types of Spending Category: {store.length}</h1>
        <h1 className="dashLen">All-Time Spending Expense: ₹{allTimeTotal}</h1>
        <div className="chart">
          <div className="section">
            <Doughnut
              data={{
                labels: Object.keys(categoryBreak),
                datasets: [
                  {
                    label: "Spending by Category",
                    data: Object.values(categoryBreak),
                    backgroundColor: [
                      "green",
                      "blue",
                      "red",
                      "purple",
                      "gray",
                      "#2596be",
                      "#fddda0",
                    ],
                  },
                ],
              }}
            />
            {/* <h2>Spending by Category</h2>
            <ul>
              {Object.entries(categoryBreak).map((category, amount) => {
                return (
                  <li key={category}>
                    <span>{category}</span>: ₹{amount}
                  </li>
                );
              })}
            </ul> */}
          </div>
          <div className="section1">
            <Bar
              data={{
                labels: recentActivity.map((val) => val.date),
                datasets: [
                  {
                    label: "Last 5 Transactions",
                    data: recentActivity.map((val) => val.amount),
                    backgroundColor: "#FF6384",
                    borderWidth: 1,
                  },
                ],
              }}
            />

            {/* <h2>Recent Activity</h2>
          <ul>
            {recentActivity.map((val) => (
              <li key={val.id}>
                <span>{val.date}</span> - ₹{val.amount} - {val.description} (
                {val.category})
              </li>
            ))}
          </ul> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
