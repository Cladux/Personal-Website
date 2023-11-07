import { configureStore } from "@reduxjs/toolkit";
import scrollPositionReducer from "./features/scrollPositionSlice";
export const store = configureStore({
  reducer: {
    scrollPosition: scrollPositionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
