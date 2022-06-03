import {configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from './auth'


// redux store holding the state
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});



export default store;
