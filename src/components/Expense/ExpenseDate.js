import React from "react";
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const weekay = props.date.toLocaleString("en-US", { weekday: "short" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__weekday">{weekay}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month expense-date__year">{month} '{year}</div>
    </div>
  );
}

export default ExpenseDate;