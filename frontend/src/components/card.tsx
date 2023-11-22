"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import InteractiveCard from "./interactiveCard";
import Rating from "@mui/material/Rating";
import { useRouter } from "next/navigation";
export default function Card({
  coworkingspaceName,
  openingHour,
  imgSrc,
  role,
  coworkingspaceList,
  ratingValue,
}: {
  coworkingspaceName: string;
  openingHour: string;
  imgSrc: string;
  role:string;
  coworkingspaceList?: (coworkingspaceName: string, rating: number) => void;
  ratingValue?: number;
}) {
  const [value, setValue] = useState(ratingValue);
  const router = useRouter()
  useEffect(() => {
    // this runs whenever ratingValue changes from the ratingValue prop.
    setValue(ratingValue);
  }, [ratingValue]);

  return (
    <InteractiveCard contentName={coworkingspaceName}>
      <div className="w-full h-[60%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="card cover"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div>
        <h3 className="ml-2 mt-2 w-full h-[30%] p-[5px] font-bold underline decoration-green-500">
          {coworkingspaceName}
        </h3>
      </div>
      <div>
        <h3 className="ml-2 w-full h-[30%] p-[5px]">
          Opening Hours: {openingHour}
        </h3>
        {/* {role !== "admin" ? (
          null
      ) : (
        <button
          className="block rounded-md bg-green-600 text-white px-3 py-2
            shadow-sm m-4 hover:bg-green-200 hover:text-green-600"
            onClick={(e) => {
              router.push("/manage");
              e.stopPropagation();
            }}
        >
          Manage
        </button>
      )} */}
      </div>
      
      <div className="ml-2 w-full h-[30%] p-[5px] font-normal decoration-green-500">
        {/* <h3>Rating</h3> */}
        {coworkingspaceList ? (
          <Rating
            id={coworkingspaceName}
            name="simple-controlled"
            value={value}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(event, newValue) => {
              const ratingValue = newValue ?? 0;
              setValue(ratingValue);
              coworkingspaceList(coworkingspaceName, ratingValue);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </InteractiveCard>
  );
}
