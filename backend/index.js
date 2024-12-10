import fs from "node:fs/promises";
import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/expenses", async (req, res) => {
  const fileContent = await fs.readFile("./data/expenses.json");
  const expensesData = JSON.parse(fileContent);
  res.status(200).json({ expenses: expensesData });
});

app.post("/add-expense", async (req, res) => {
  console.log(req.body);
  const expenseData = req.body;
  const newExpense = {
    ...expenseData,
    id: (Math.random() * 1000).toString(),
  };
  console.log(newExpense);
  const fileContent = await fs.readFile("./data/expenses.json", "utf8");
  console.log(fileContent);
  const expensesData = JSON.parse(fileContent);
  expensesData.push(newExpense);
  await fs.writeFile("./data/expenses.json", JSON.stringify(expensesData));
  res.status(201).json({ message: "Expense is added successfully" });
});

app.listen(3005, () => {
  console.log("Backend server connected");
});
