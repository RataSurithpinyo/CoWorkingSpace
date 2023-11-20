import React, { Suspense } from "react";
import HospitalCatalog from "@/components/hospitalCatalog";
import { LinearProgress } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { dbConnect } from "@/db/dbConnect";
import HospitalDB from "@/db/models/Hospital";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import getCoworkingspaces from "@/libs/getCoworkingspaces";
import AddCoworkingspaceForm from "@/components/addCoworkingspaceForm";

export default async function Hospital() {
  const hospitalsPromise = getCoworkingspaces(); // Promise
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  const addHospital = async (addHospitalForm: FormData) => {
    "use server";
    console.log("addhospital");
    const name = addHospitalForm.get("name");
    const address = addHospitalForm.get("address");
    const district = addHospitalForm.get("district");
    const province = addHospitalForm.get("province");
    const postalcode = addHospitalForm.get("postalcode");
    const tel = addHospitalForm.get("tel");
    const picture = addHospitalForm.get("picture");
    console.log(name, address, district);
    try {
      console.log("in try block");
      await dbConnect();
      const hospital = await HospitalDB.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidateTag("coworkingspaces");
    redirect("/coworkingspace");
  };

  return (
    <main>
      <div className="mt-24">
        <h1 className="text-center text-xl underline decoration-green-500 font-bold text-2xl">
          Select your desired coworking spaces
        </h1>
        <Suspense
          fallback={
            <p className="mt-6 text-center">
              Loading ... <LinearProgress />
            </p>
          }
        >
          <HospitalCatalog hospitalPromise={hospitalsPromise} />
          {profile.data.role == "admin" ? (
            <AddCoworkingspaceForm action={addHospital} />
          ) : null}
        </Suspense>
      </div>
    </main>
  );
}
