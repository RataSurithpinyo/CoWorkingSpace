"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import InteractiveCard from "./interactiveCard";
import Rating from "@mui/material/Rating";

export default function Card({
  hospitalName,
  imgSrc,
  hospitalList,
  ratingValue,
}: {
  hospitalName: string;
  imgSrc: string;
  hospitalList?: (hospitalName: string, rating: number) => void;
  ratingValue?: number;
}) {
  const [value, setValue] = useState(ratingValue);

  useEffect(() => {
    // this runs whenever ratingValue changes from the ratingValue prop.
    setValue(ratingValue);
  }, [ratingValue]);

  return (
    <InteractiveCard contentName={hospitalName}>
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
          {hospitalName}
        </h3>
      </div>
      <div className="ml-2 w-full h-[30%] p-[5px] font-normal decoration-green-500">
        {/* <h3>Rating</h3> */}
        {hospitalList ? (
          <Rating
            id={hospitalName}
            name="simple-controlled"
            value={value}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(event, newValue) => {
              const ratingValue = newValue ?? 0;
              setValue(ratingValue);
              hospitalList(hospitalName, ratingValue);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </InteractiveCard>
  );
}
