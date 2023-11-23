"use client"
import { editBooking, removeBooking } from "@/libs/bookingManager";
import { BookingItem } from "../../interfaces";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./dateReserve";

export default function BookingCard({ bookItem, editor, index, }: { bookItem: any, editor: any, index: number }) {

  const [newBookingItem, setNewBookingItem] = useState<BookingItem|null>(null);

  return(
    <div
      className="bg-white rounded px-5 mx-5 py-2 my-2"
      key={bookItem.id}
    >
      <div className="text-xl font-bold">
        Coworking Space: {bookItem.coworkingspace.name}
      </div>
      <div>
        Number of Rooms: { editor.getIndex() != index ? bookItem.numOfRooms :
          <input
            min={1}
            max={3}
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
        Reserved Date: { editor.getIndex() != index ? dayjs(bookItem.bookingDate).format("DD/MM/YYYY") :
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
        editor.getIndex() != index ?
        <div className="flex gap-3">
          <button
            className="mt-4 block rounded-md bg-white border-2 border-red-400 hover:bg-red-200 px-3 py-2 text-red-400 shadow-sm"
            onClick={() => {
              editor.setIndex(index);
              setNewBookingItem(bookItem);
            }}
          >
            Edit Reservation
          </button>
          <button
            className="mt-4 block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2 text-white shadow-sm"
            onClick={() => {
              removeBooking(bookItem._id);
              editor.refresh()
            }}
          >
            Remove Reservation
          </button>
        </div>
        :
        <div className="flex gap-3">
          <button
            className="mt-4 block rounded-md bg-white border-2 border-green-400 hover:bg-green-200 px-3 py-2 text-green-400 shadow-sm"
            onClick={() => {
              editor.setIndex(null);
              setNewBookingItem(null);
            }}
          >
            Cancel
          </button>
          <button
            className="mt-4 block rounded-md bg-green-400 hover:bg-green-600 px-3 py-2 text-white shadow-sm"
            onClick={() => {
              console.log(newBookingItem)
                if (newBookingItem) {
                  editBooking(newBookingItem);
                  editor.setIndex(null);
                  setNewBookingItem(null);
                  editor.refresh()
                }
            }}
          >
            Save
          </button>
        </div>
      }
    </div>
  )
} 