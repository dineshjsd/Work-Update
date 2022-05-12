import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem() {
    const expDate = new Date(2022, 5, 12);
    const expTitle = "Car Insurance";
    const expAmount = 300;
  return (
    <div className="expense-item">
      <div>{expDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expTitle}</h2>
        <div className="expense-item__price">${expAmount}</div>
      </div>
    </div>
  );
}
