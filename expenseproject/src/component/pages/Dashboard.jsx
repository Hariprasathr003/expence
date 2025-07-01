import React, { useContext } from "react";
import { CreateContextForm } from "../contextpage/ExpencFormContext";

const Dashboard = () => {
  const { store } = useContext(CreateContextForm);
  return (
    <>
      <h1>Dashboard</h1>
      <h1>Total Spending : {store.length}</h1>
    </>
  );
};

export default Dashboard;
