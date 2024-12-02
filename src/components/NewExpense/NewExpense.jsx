import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const newExpense = (props) => {
  const [editForm, setEditForm] = useState(false);
  const formHandler = () => {
    if (!editForm) {
      console.log("form edit open");
    } else {
      console.log("form edit close");
    }
    return setEditForm(!editForm);
  };
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  if (!editForm) {
    return (
      <div className="new-expense">
        <button selected={editForm} onClick={formHandler}>
          Add Expense
        </button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={formHandler}
      />
    </div>
  );
};

export default newExpense;
