import React, { Suspense, useEffect } from "react";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import getCoworkingspaces from "@/libs/getCoworkingspaces";
import AddCoworkingspaceForm from "@/components/addCoworkingspaceForm";
import CoworkingspaceCatalog from "@/components/CoworkingspaceCatalog";

export default async function Coworking() {
  const coworkingPromise = getCoworkingspaces(); // Promise
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  return (
    <main>
      <div className="mt-24">
        {profile.data.role !== "admin" ? (
          <h1 className="text-center underline decoration-green-500 font-bold text-2xl">
            Select your desired coworking spaces
          </h1>
        ) : (
          <h1 className="text-center underline decoration-green-500 font-bold text-2xl">
            Manage all coworking spaces
          </h1>
        )}
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
          <CoworkingspaceCatalog coworkingspacePromise={coworkingPromise} />
        </Suspense>
      </div>
    </main>
  );
}
