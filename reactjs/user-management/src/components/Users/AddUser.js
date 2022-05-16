import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setUsername] = useState("");
  const [enteredUserage, setUserage] = useState("");
  const [error, setError] = useState();

  // function to add user
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredUserage.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty vlaues).",
      });
      return;
    }
    if (+enteredUserage < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    console.log(enteredUserage);
    props.onAddUser(enteredUsername, enteredUserage);

    setUsername("");
    setUserage("");
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const userageChangeHandler = (event) => {
    setUserage(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <input
            type="text"
            value={enteredUsername}
            placeholder="User Name"
            onChange={usernameChangeHandler}
          />
          <input
            type="number"
            value={enteredUserage}
            placeholder="Age(years)"
            onChange={userageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
