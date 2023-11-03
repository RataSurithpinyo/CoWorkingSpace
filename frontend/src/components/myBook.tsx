import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeReservation } from "@/redux/features/bookSlice";

export default function MyBook() {
  const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
  const dispatch = useDispatch<AppDispatch>();
  console.log("book item", bookItems);

  return (
    <>
      {bookItems.length !== 0 ? (
        bookItems.map((bookItem) => (
          <div
            className="bg-white rounded px-5 mx-5 py-2 my-2"
            key={bookItem.id}
          >
            <div>Name: {bookItem.name}</div>
            <div>Surname: {bookItem.surname}</div>
            <div>Reserved Hospital: {bookItem.hospital}</div>
            <div>ID: {bookItem.id}</div>
            <div>Reserved Date: {bookItem.bookDate}</div>
            <button
              className="mt-4 block rounded-md bg-red-400 hover:bg-red-600 px-3 py-2 text-white shadow-sm"
              onClick={() => dispatch(removeReservation(bookItem))}
            >
              Remove from booking
            </button>
          </div>
        ))
      ) : (
        <div className="bg-white rounded px-5 mx-5 py-2 my-2">
          No Vaccine Booking
        </div>
      )}
    </>
  );
}
