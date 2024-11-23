import React from "react";
import { useState } from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const dropdownChangeHandler = (event) => {
    const newYear = event.target.value;
    setSelectedYear(newYear);
    props.onYearChange(newYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;