import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import { useState } from "react";
import ExpensesList from "./ExpensesList.jsx";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2024);

  const filterYearHandler = (newYear) => {
    return setFilteredYear(newYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return new Date(expense.date).getFullYear() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onYearChange={filterYearHandler}
      />
      <ExpensesList expenses={filteredExpenses} isLoading={props.isLoading} />
    </Card>
  );
};

export default Expenses;
