import React from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button/Button";

function AddUser(props) {
  // function to add user
  const AddUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddUserHandler}>
        <input type="text" placeholder="User Name" />
        <input type="number" placeholder="Age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
