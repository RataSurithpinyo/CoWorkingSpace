import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { editReservation, removeReservation } from "@/redux/features/bookSlice";
import { useState } from "react";
import { BookingItem } from "../../interfaces";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./dateReserve";

export default function MyBook() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();
  console.log("book item", bookItems);

  const [editingIndex, setEditingIndex] = useState<number|null>(null);
  const [newBookingItem, setNewBookingItem] = useState<BookingItem|null>(null);

  return (
    <>
      {bookItems.length !== 0 ? (
        bookItems.map((bookItem, index) => (
          <div
            className="bg-white rounded px-5 mx-5 py-2 my-2"
            key={bookItem.id}
          >
            <div className="text-xl font-bold">
              Coworking Space: {bookItem.coworkingspace}
            </div>
            <div>
              Number of Rooms: { editingIndex != index ? bookItem.numOfRooms :
                <input
                  min={1}
                  type="number"
                  id="numOfRooms"
                  name="numOfRooms"
                  placeholder="Enter a number"
                  required
                  value={newBookingItem?.numOfRooms}
                  onChange={(e) => {if (newBookingItem) setNewBookingItem({ ...newBookingItem, numOfRooms: parseInt(e.target.value)})}}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              }
            </div>
            <div>
              Reserved Date: { editingIndex != index ? dayjs(bookItem.bookingDate).format("DD/MM/YYYY") :
                <DateReserve
                  onDateChange={(value: Dayjs) => {
                    if (newBookingItem)
                      setNewBookingItem({ ...newBookingItem, bookingDate: value.toDate()})
                  }}
                  initialDate={dayjs(newBookingItem?.bookingDate)}
                />

              }
            </div>
            {
              index != editingIndex ?
              <div className="flex gap-3">
                <button
                  className="mt-4 block rounded-md bg-white border-2 border-red-400 hover:bg-red-200 px-3 py-2 text-red-400 shadow-sm"
                  onClick={() => {
                    setEditingIndex(index);
                    setNewBookingItem(bookItem);
                  }}
                >
                  Edit Reservation
                </button>
                <button
                  className="mt-4 block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2 text-white shadow-sm"
                  onClick={() => dispatch(removeReservation(index))}
                >
                  Remove Reservation
                </button>
              </div>
              :
              <div className="flex gap-3">
                <button
                  className="mt-4 block rounded-md bg-white border-2 border-green-400 hover:bg-green-200 px-3 py-2 text-green-400 shadow-sm"
                  onClick={() => {
                    setEditingIndex(null);
                    setNewBookingItem(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="mt-4 block rounded-md bg-green-400 hover:bg-green-600 px-3 py-2 text-white shadow-sm"
                  onClick={() => {
                    if (newBookingItem) {
                      dispatch(editReservation({ index, newBookingItem }));
                      setEditingIndex(null);
                      setNewBookingItem(null);
                    }
                  }}
                >
                  Save
                </button>
              </div>
            }
          </div>
        ))
      ) : (
        <div className="bg-white rounded px-5 mx-5 py-2 my-2">
          No Coworking Space Booking
        </div>
      )}
    </>
  );
}
