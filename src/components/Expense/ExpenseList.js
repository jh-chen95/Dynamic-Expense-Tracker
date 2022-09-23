import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './ExpenseList.css';


const currentYear = new Date().toLocaleString("en-US", { year: "numeric" });

const ExpenseList = (props) => {
  const [ filteredYear, setFilteredYear ] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={filteredYear} 
          onFilterChange={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        {
          filteredExpenses.length === 0 
          ? (<h2 className="expenses-list__fallback">No expenses found.</h2>) 
          :filteredExpenses.map(expense => {
            return <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
            }
          )
        }
      </Card>
    </div>
  );
}

export default ExpenseList;