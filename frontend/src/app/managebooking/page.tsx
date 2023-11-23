"use client";
import MyBook from "@/components/myBook";
import { getBookings } from "@/libs/bookingManager";
import { LinearProgress } from "@mui/material";
import { Suspense, useState } from "react";
import { BookingItem } from "../../../interfaces";
import { useRouter } from "next/navigation";

export default function ManageBooking() {
  const bookingPromise = getBookings().then(res => res.data);
  const router = useRouter();

  const [editingIndex, setEditingIndex] = useState<number|null>(null);

  const editor = {
    getIndex: () => editingIndex,
    setIndex: (v: number|null) => setEditingIndex(v),
    refresh: () => router.refresh(),
  }

  return (
    <main>
      <div className="mt-24 mb-24">
        <h1 className="text-center underline decoration-green-500 font-bold text-2xl">
          Manage all bookings
        </h1>
        <Suspense
          fallback={
            <p className="mt-6 text-center">
              Loading ...{" "}
              <LinearProgress
                variant="indeterminate"
                sx={{
                  backgroundColor: "green",
                  "& .MuiLinearProgress-bar": { backgroundColor: "lightGreen" },
                }}
              />
            </p>
          }
        >
          <MyBook bookingPromise={bookingPromise} editor={editor} showUser={true}/>
        </Suspense>
      </div>
    </main>
  );
}
