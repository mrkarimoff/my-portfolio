import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  openDrawer: false,
};

const generalReducer = createSlice({
  name: "general",
  initialState,
  reducers: {
    toggleDrawer: (state, action) => {
      state.openDrawer = action.payload;
    },
    updateState: (state, { payload }) => {
      state[payload.state] = payload.setState;
    },
  },
});

export const { toggleDrawer, updateState } = generalReducer.actions;

export default generalReducer.reducer;
