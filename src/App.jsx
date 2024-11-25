import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const DYMMY_EXPENSES = [
  {
    id: "id1",
    date: new Date(2024, 10, 12),
    title: "New book",
    price: 30.99,
  },
  {
    id: "id2",
    date: new Date(2024, 10, 12),
    title: "New jeans",
    price: 99.99,
  },
  {
    id: "id3",
    date: new Date(2024, 0, 25),
    title: "New bag",
    price: 139.99,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DYMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
