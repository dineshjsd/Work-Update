import React from "react";
import './ExpenseItem.css';

export default function ExpenseItem() {
  return (
   
    <div className="expense-item">
        <div>May 12 2022</div>
        <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__price">$300</div>
        </div>
    </div>

  );
}
