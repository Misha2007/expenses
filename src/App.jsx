import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Error from "./components/UI/Error.jsx";

// const DYMMY_EXPENSES = [
//   {
//     id: "id1",
//     date: new Date(2023, 10, 12),
//     title: "New book",
//     price: 30.99,
//   },
//   {
//     id: "id2",
//     date: new Date(2024, 10, 12),
//     title: "New jeans",
//     price: 99.99,
//   },
//   {
//     id: "id3",
//     date: new Date(2024, 0, 25),
//     title: "New bag",
//     price: 139.99,
//   },
// ];

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3005/expenses");
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed fetching data");
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: "An error occurred",
          message: "Failed to fetch expenses data, please try agin later.",
        });
        setShowError(true);
      }
      setIsFetching(false);
    };
    getExpenses();
    console.log(expenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const errorHandler = () => {
    setError(null);
    setShowError(false);
  };

  const addExpenseHandler = (expense) => {
    const addExpense = async (expense) => {
      try {
        console.log(JSON.stringify(expense));
        const response = await fetch("http://localhost:3005/add-expense", {
          method: "POST",
          body: JSON.stringify(expense),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error("Failed adding expense");
        }
        setExpenses([expense, ...expenses]);
      } catch (error) {
        setError({
          title: "An error occurred",
          message: "Failed to add expense, please try again later.",
        });
        setShowError(true);
      }
    };
    addExpense(expense);
  };

  return (
    <div className="App">
      {showError && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses} isLoading={isFetching} />
    </div>
  );
};

export default App;
