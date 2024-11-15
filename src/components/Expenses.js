import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card";

const Expenses = (props) => {
  console.log(props.expenses);
  return (
    <Card className="expenses">
      <ExpenseItem data={props.expenses[0]} />
      <ExpenseItem data={props.expenses[1]} />
    </Card>
  );
};

export default Expenses;
