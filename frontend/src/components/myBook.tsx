import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { Suspense, useState } from "react";
import { BookingItem } from "../../interfaces";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "./dateReserve";
import { editBooking, getBookings, removeBooking } from "@/libs/bookingManager";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { useRouter } from "next/router";
import BookingCard from "./BookingCard";

export default async function MyBook({ bookingPromise, editor, showUser }: {
  bookingPromise: Promise<any>,
  editor: { getIndex: Function, setIndex: Function },
  showUser?: boolean
}) {
  const bookItems = await bookingPromise

  return (
    <>
      {bookItems.length !== 0 ? (
        bookItems.map((bookItem: any, index: number) => (
          <BookingCard bookItem={bookItem} editor={editor} index={index} showUser={showUser}/>
        ))
      ) : (
        <div className="bg-white rounded px-5 mx-5 py-2 my-2">
          No Coworking Space Booking
        </div>
      )}
    </>
  );
}
