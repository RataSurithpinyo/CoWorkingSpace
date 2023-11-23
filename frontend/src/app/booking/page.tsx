"use client";
import { useRouter, useSearchParams } from "next/navigation";
import DateReserve from "@/components/dateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import App from "next/app";
import { BookingItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";
import { addBooking } from "@/libs/bookingManager";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Booking() {
  const router = useRouter()
  const urlParams = useSearchParams();
  const cid = urlParams.get("id");
  const coworking = urlParams.get("coworking");
  const dispatch = useDispatch<AppDispatch>();
  const makeBooking = () => {
    // connect backend here
    if (cid && numOfRooms && coworking && bookingDate) {
      const item: BookingItem = {
        user: localStorage.getItem("username") ?? "",
        numOfRooms: numOfRooms,
        coworkingspace: cid,
        bookingDate: bookingDate.toDate(),
      };
      console.log("item:",item);
      addBooking(item);
      finishNavigate();
    }
  };
  const [bookingDate, setbookingDate] = useState<Dayjs | null>(null);
  const [numOfRooms, setnumOfRooms] = useState<number>(1);

  const finishNavigate = async () => {
      const token = localStorage.getItem("token")
      if (!token) router.push('/')
      else {
        const role = await getUserProfile(token).then(res => res.data.role);
        if (role === 'admin') router.push('/managebooking')
        else router.push('mybooking')
        router.refresh()
      }
    }

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      <div className="mt-10 mb-0 font-semibold text-xl text-center underline decoration-green-500 ">
        Your selected coworking space: {coworking}
      </div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-black">
          <div className="mt-3">วันที่ต้องการจอง coworking space</div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setbookingDate(value);
            }}
          />
        </div>
        <div className="mt-6">จำนวนห้องที่ต้องการจอง</div>
        <input
          min={1}
          max={3}
          type="number"
          id="numOfRooms"
          name="numOfRooms"
          placeholder="Enter a number"
          required
          value={numOfRooms}
          onChange={(e) => setnumOfRooms(parseInt(e.target.value))}
          className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>

      <button
        className="ml-4 mt-10 block rounded-md bg-green-600 text-white px-3 py-2
        shadow-sm hover:bg-green-200 hover:text-black hover:border-2 hover:border-green-500"
        onClick={makeBooking}
      >
        Book Coworking Space
      </button>
    </main>
  );
}
