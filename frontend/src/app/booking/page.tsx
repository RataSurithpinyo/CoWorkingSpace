"use client";
import { useSearchParams } from "next/navigation";
import DateReserve from "@/components/dateReserve";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import App from "next/app";
import { BookingItem } from "../../../interfaces";
import { addReservation } from "@/redux/features/bookSlice";

export default function Booking() {
  const urlParams = useSearchParams();
  const hid = urlParams.get("id");
  const hospital = urlParams.get("hospital");
  // console.log("hid & hospital", hid, hospital)
  // name, id, hospital, date
  const dispatch = useDispatch<AppDispatch>();
  const makeBooking = () => {
    console.log("test click");
    if (hid && hospital && date && name) {
      const item: BookingItem = {
        name: name,
        surname: surname,
        id: id,
        hospital: hospital,
        bookDate: dayjs(date).format("YYYY/MM/DD"),
      };
      console.log(item);
      dispatch(addReservation(item));
    }
  };
  const [date, setDate] = useState<Dayjs | null>(null);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(event.target.value);
  };
  const [id, setId] = useState<string>("");
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };
  const [bookHospital, setBookHospital] = useState<string>(
    "Chulalongkorn Hospital"
  );
  const handleHospitalChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedHospital = event.target.value;
    setBookHospital(selectedHospital);
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4">
      {/* <div className="mt-8 text-xl text-center ">
        Hospital: {hospital}
      </div> */}
      <div className="mt-4 text-xl text-center underline decoration-sky-500 ">
        Book Your Vaccination
      </div>

      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">
          <label className="block">
            <span className="text-slate-700">ชื่อ</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm  
          "
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>

        <div className="text-md text-left text-gray-600">
          <label className="block">
            <span className="text-slate-700">นามสกุล</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm  
          "
              value={surname}
              onChange={handleSurnameChange}
            />
          </label>
        </div>

        <div className="text-md text-left text-gray-600 ">
          <label className="block">
            <span className="text-slate-700">รหัสประจำตัวประชาชน</span>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
              value={id}
              onChange={handleIdChange}
            />
          </label>
        </div>

        <div className="text-md text-left text-gray-600">
          <label className="block">
            <span className="text-slate-700">โรงพยาบาล</span>
            {/* <select
              className="mt-1 block w-[100%] pl-2 pr-2 py-2 bg-white border border-slate-300 rounded-md text-sm"
              value={bookHospital}
              onChange={handleHospitalChange}
            >
              <option value="Chulalongkorn Hospital">
                Chulalongkorn Hospital
              </option>
              <option value="Rajavithi Hospital">Rajavithi Hospital</option>
              <option value="Thammasat University Hospital">
                Thammasat University Hospital
              </option>
            </select> */}
            <p>Your selected hospital: {hospital}</p>
          </label>
        </div>

        <div className="text-md text-left text-gray-600">
          <div className="mt-3">วันที่ต้องการรับวัคซีน</div>
          <DateReserve
            onDateChange={(value: Dayjs) => {
              setDate(value);
            }}
          />
        </div>
      </div>

      <button
        className="block rounded-md bg-sky-600 hover:bg-indigo-950 px-3 py-2 text-white shadow-sm"
        onClick={makeBooking}
      >
        Book Hospital
      </button>
    </main>
  );
}
