import React, { Suspense } from "react";
import Card from "./card";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function CoworkingspaceCatalog({ coworkingspacePromise }) {
  const coworkingspaceJsonReady = await coworkingspacePromise;
  console.log(coworkingspaceJsonReady.data)
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  return (
    <>
      <h3 className="text-center mt-4">
        {coworkingspaceJsonReady.count} coworking space(s) found in the system.
      </h3>
      {profile.data.role !== "admin" ? null : (
              <div className="flex justify-center items-center">
                <Link href={'/create'}>
                  <button
                    className="ml-4 mt-4 block rounded-md bg-sky-600 hover:bg-sky-300 hover:text-black hover:border-2 hover:border-sky-600 px-3 py-2
                text-white shadow-sm"
                  >
                    Create new space
                  </button>
                </Link>
              </div>
            )}
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
              role={profile.data.role}
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
