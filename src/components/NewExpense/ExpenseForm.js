import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [ enteredTitle, setEnteredTitle ] = useState("");
  const [ enteredAmount, setEnteredAmount ] = useState("");
  const [ enteredDate, setEnteredDate ] = useState("");
  const [ isEditing, setIsEditing ] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const cancelHandler = () => {
    setIsEditing(false);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate.split("-"))
    }
    
    props.onSaveExpenseData(expenseData);
    
    // clear the form after it's submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    setIsEditing(false);
  }

  return (
    <div>
      {
        isEditing === false
        ? <button type="button" onClick={startEditingHandler}>Add New Expense</button>
        :<form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" value={enteredDate} min="2019-01-01" max={new Date().toISOString().split("T")[0]} onChange={dateChangeHandler} />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
            <button type="button" onClick={cancelHandler}>Cancel</button>
          </div>
        </form>
      }
    </div>
  );
}

export default ExpenseForm;