import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const scrollPositionSlice = createSlice({
  name: "scrollPosition",
  initialState: 0,
  reducers: {
    updateScrollPosition: (state, action: PayloadAction<number>) => {
      console.log(state);
      return action.payload;
    },
  },
});

export const { updateScrollPosition } = scrollPositionSlice.actions;

export default scrollPositionSlice.reducer;
