import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";

const Expenses = (props) => {
  console.log(props.expenses);
  return (
    <Card className="expenses">
      <ExpenseItem expenseData={props.expenses[0]} />
      <ExpenseItem expenseData={props.expenses[1]} />
    </Card>
  );
};

export default Expenses;
