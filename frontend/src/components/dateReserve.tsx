"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
export default function DateReserve({onDateChange, initialDate }:{onDateChange: Function, initialDate?: Dayjs}) {
  const [date, setDate] = useState<Dayjs|null>(initialDate ?? null)
  return (
    <div
      className="mt-1 bg-white border border-slate-300 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex-row justify-center"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" 
        value={date}
        onChange={(value) => {setDate(value); onDateChange(value);}}/>
      </LocalizationProvider>
    </div>
  );
}
