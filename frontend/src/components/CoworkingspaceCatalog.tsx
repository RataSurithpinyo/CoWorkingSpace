import React, { Suspense } from "react";
import Card from "./card";
import Link from "next/link";

export default async function CoworkingspaceCatalog({ coworkingspacePromise }) {
  const coworkingspaceJsonReady = await coworkingspacePromise;
  // if (!coworkingspaceJsonReady) {
  //   return null;
  // }
  return (
    <>
      <h3 className="text-center mt-4">
        {coworkingspaceJsonReady.count} coworking space(s) found in our system
      </h3>
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
        {coworkingspaceJsonReady.data.map((coworkingspaceItem) => (
          <Link
            key={coworkingspaceItem.id}
            href={`/coworkingspace/${coworkingspaceItem.id}`}
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[25%] p-2 sm:p-4 md:p-4 lg:p-8"
          >
            <Card
              coworkingspaceName={coworkingspaceItem.name}
              openingHour={coworkingspaceItem.operatingHours}
              imgSrc={coworkingspaceItem.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
