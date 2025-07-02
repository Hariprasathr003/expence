import React, { useState } from "react";
import { useContext } from "react";
import { CreateContextForm } from "../contextpage/ExpenseFormContext";
import "../../style/Form.css";

const ExpenseForm = () => {
  const { handleSubmit, formValue, handleChange } =
    useContext(CreateContextForm);

  return (
    <>
      <h1 className="title">ExpenseForm</h1>

      <form className="formlist" action="" onSubmit={handleSubmit}>
        <label htmlFor="">Amount</label>
        <input
          type="number"
          name="amount"
          min="1"
          value={formValue.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />

        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={formValue.description}
          onChange={handleChange}
          placeholder="description"
          required
        />

        <label htmlFor="">Category</label>
        <select
          name="category"
          id=""
          value={formValue.category}
          onChange={handleChange}
          placeholder="category"
          required
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="bills">Bills</option>
          <option value="health">Health</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="">Date</label>
        <input
          type="date"
          name="date"
          value={formValue.date}
          onChange={handleChange}
          placeholder="date"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
