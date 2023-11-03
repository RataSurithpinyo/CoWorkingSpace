import { BookingItem } from "./../../../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<BookingItem>) => {
      if (state.bookItems.length > 0) {
        state.bookItems = [];
        state.bookItems.push(action.payload);
      } else state.bookItems.push(action.payload);
    },
    removeReservation: (state, action: PayloadAction<BookingItem>) => {
      state.bookItems = []; // there is only possible 1 booking item
    },
  },
});

export const { addReservation, removeReservation } = bookSlice.actions;
export default bookSlice.reducer;
