"use client";
import React, { useReducer } from "react";
import Card from "./card";
import Link from "next/link";

export default function CardPanel() {
  const cardReducer = (
    hospitalList: Map<string, number>,
    action: { type: string; hospitalName: string; rating?: number }
  ) => {
    if (action.type === "add") {
      const newHospitalList = new Map(hospitalList);
      newHospitalList.set(action.hospitalName, action.rating ?? 0);
      // console.log(hospitalList)
      return newHospitalList;
    } else if (action.type === "remove") {
      const newHospitalList = new Map(hospitalList);
      newHospitalList.delete(action.hospitalName);
      console.log(newHospitalList);
      return newHospitalList;
    } else {
      // console.log(hospitalList)
      return hospitalList;
    }
  };

  let defaultHospital = new Map<string, number>([
    ["Chulalongkorn Hospital", 5],
    ["Rajavithi Hospital", 5],
    ["Thammasat University Hospital", 5],
  ]);

  const [hospitalList, dispatchList] = useReducer(cardReducer, defaultHospital);

  // Mock Data of Hospitals
  const mockHospital = [
    { hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg" },
    { hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg" },
    {
      hid: "003",
      name: "Thammasat University Hospital",
      image: "/img/thammasat.jpg",
    },
  ];

  return (
    <div className="mb-4">
      <div
        style={{
          margin: "30px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {mockHospital.map((hospitalItem) => (
          <Link href={`/coworkingspace/${hospitalItem.hid}`} className="w-1/5">
            <Card
              hospitalName={hospitalItem.name}
              imgSrc={hospitalItem.image}
              hospitalList={(hospital, rating) =>
                dispatchList({ type: "add", hospitalName: hospital, rating })
              }
              ratingValue={hospitalList.get(hospitalItem.name) ?? 0}
            />
          </Link>
        ))}
      </div>
      <div className="ml-32 mb-2 font-bold underline decoration-sky-500">
        Hospital List with Ratings : {hospitalList.size}
      </div>
      {Array.from(hospitalList.keys()).map((hospital) => (
        <div
          className="ml-32 cursor-pointer"
          key={hospital}
          onClick={() =>
            dispatchList({ type: "remove", hospitalName: hospital })
          }
        >
          {hospital} : {hospitalList.get(hospital)}
        </div>
      ))}
      {hospitalList.size === 0 && <div className="ml-32">No Ratings.</div>}
    </div>
  );
}
