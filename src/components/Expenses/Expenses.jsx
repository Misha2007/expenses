import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "./ExpensesFilter.jsx";

const Expenses = (props) => {
  console.log(props.expenses);
  const filterYearHandler = (newYear) => {
    console.log(`Year data in Expenses.js : ${newYear}`);
    console.log();
  };

  props.expenses.map((expenses) => {
    console.log(expenses);
  });
  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={filterYearHandler} />
      {props.expenses.map((expense) => {
        return <ExpenseItem expenseData={expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expenses;
