import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

// const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
//   });

  // function to change title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
//    setUserInput({
//       ...userInput,
//       enteredTitle: event.target.value,
//     });
//     setUserInput((prevState) => {
//         console.log(prevState);
//       return { ...prevState, enteredTitle: event.target.value };
      
//     });
  };
  // function to change amount
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // function to change date
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // function to handle form submission submitHandler
  const submitHandler = (event) => {
      event.preventDefault();

      const expenseData = {
          title: enterdTitle,
          amount: enterdAmount,
          date : new Date(enterdDate)
      }
      console.log(expenseData)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
