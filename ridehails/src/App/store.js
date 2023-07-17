import { configureStore } from "@reduxjs/toolkit";
import useReducer from "../Features/features.js";

export default configureStore({
  reducer: {
    user: useReducer,
  },
});