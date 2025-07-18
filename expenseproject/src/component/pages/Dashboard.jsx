import React, { useContext } from "react";
import { CreateContextForm } from "../contextpage/ExpenseFormContext";
import "../../style/Dashboard.css";
import { Chart } from "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";

const Dashboard = () => {
  const { store } = useContext(CreateContextForm);

  const allTimeTotal = store.reduce((acc, val) => acc + Number(val.amount), 0);

  const today = new Date();
  const month = today.getMonth();

  const monthCalculate = store.filter((val) => {
    const value = new Date(val.date);
    return value.getMonth() === month;
  });

  const monthTotal = monthCalculate.reduce(
    (acc, val) => acc + Number(val.amount),
    0
  );

  const recentActivity = store
    .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
    .slice(0, 5);

  const categoryBreak = store.reduce((acc, val) => {
    const category = val.category;
    acc[category] = (acc[category] || 0) + Number(val.amount);
    return acc;
  }, {});

  console.log(Object.entries(categoryBreak), "categgggggggggggg");

  return (
    <>
      <div className="dashboard">
        <h1 className="title">Dashboard</h1>

        <div className="chart">
          <div className="section1">
            <h1 className="title">Total Spending</h1>
            <h4 className="">Total Spending Carts: {store.length}</h4>
            <h4 className="">All-Time Spending Expense: ₹{allTimeTotal}</h4>
            <h4 className="">MonthTotal Spending Expense: ₹{monthTotal}</h4>
          </div>
          <div className="section2">
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
          </div>
          <div className="section3">
            <Bar
              data={{
                labels: recentActivity.map((val) => val.date),
                datasets: [
                  {
                    label: "Last 5 Transactions",
                    data: recentActivity.map((val) => val.amount),
                    backgroundColor: "#FF6384",
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
