import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2024);

  const filterYearHandler = (newYear) => {
    return setFilteredYear(newYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={filterYearHandler} />
      {filteredExpenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
