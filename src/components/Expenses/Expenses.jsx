import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expenses = (props) => {
  console.log(props.expenses);
  const saveExpenseDataHandler = (newYear) => {
    console.log(`Year data in Expenses.js : ${newYear}`);
    console.log();
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={saveExpenseDataHandler} />
      <ExpenseItem expenseData={props.expenses[0]} />
      <ExpenseItem expenseData={props.expenses[1]} />
    </Card>
  );
};

export default Expenses;
