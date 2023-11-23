import { useRouter } from "next/navigation";
import { BookingItem } from "./../../../interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookState = {
  bookItems: BookingItem[];
};

const initialState: BookState = { bookItems: [] };

export const bookSlice = createSlice({
  // const router = useRouter()
  name: "book",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<{ newBookingItem: BookingItem, coworkingspaceId: string }>) => {
      if (state.bookItems.length < 3) {
        state.bookItems.push(action.payload.newBookingItem);
      } else {
        alert('Sorry, You cannot book more than 3 reservations.')
        window.location.reload();
      }
    },
    removeReservation: (state, action: PayloadAction<number>) => {
      if (state.bookItems.length > action.payload) {
        state.bookItems.splice(action.payload, 1)
      } else {
        throw("no such booking")
      }
    },
    editReservation: (state, action: PayloadAction<{ index: number, newBookingItem: BookingItem }>) => {

      state.bookItems[action.payload.index] = action.payload.newBookingItem;
    }
  },
});

export const { addReservation, removeReservation, editReservation } = bookSlice.actions;
export default bookSlice.reducer;
