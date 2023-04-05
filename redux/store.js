import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./reducers/general.reducer";

const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});

export default store;
