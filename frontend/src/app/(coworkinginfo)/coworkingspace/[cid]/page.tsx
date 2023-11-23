import getCoworkingspace from "@/libs/getCoworkingspace";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function hospitalDetailPage({
  params,
}: {
  params: { cid: string };
}) {
  const coworkingDetail = await getCoworkingspace(params.cid);
  // console.log("helloworld")
  // console.log(coworkingDetail)
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);

  return (
    <main className="mt-20 text-center p-10">
      <h1 className="font-bold text-2xl underline decoration-green-500">
        {coworkingDetail.data.name}
      </h1>
      <div className="flex flex-row my-5">
        <Image
          src={coworkingDetail.data.picture}
          alt="Coworking Space Image"
          width={0}
          height={0}
          sizes="100vh"
          className="rounded-lg w-[30%] drop-shadow-xl"
        />
        <div className="text-left">
          <div className="text-md mx-5 font-semibold">Name: {coworkingDetail.data.name}</div>
          <div className="text-md mx-5">
            Operating Hours: {coworkingDetail.data.operatingHours}
          </div>
          <div className="text-md mx-5">
            Address: {coworkingDetail.data.address}
          </div>
          <div className="text-md mx-5">
            Province: {coworkingDetail.data.province}
          </div>
          <div className="text-md mx-5">
            Postal Code: {coworkingDetail.data.postalcode}
          </div>
          <div className="text-md mx-5">
            Contact: {coworkingDetail.data.tel}
          </div>
          <Link
            href={`/booking?id=${params.cid}&coworking=${coworkingDetail.data.name}`}
          >
            <button
              className="ml-4 mt-6 block rounded-md bg-green-600 text-white px-3 py-2
            shadow-sm hover:bg-green-200 hover:text-black hover:border-2 hover:border-green-500"
            >
              Make Reservation
            </button>
            {profile.data.role !== "admin" ? null : (
              <div>
                <Link href={`/manage?id=${params.cid}&coworking=${coworkingDetail.data.name}`}>
                  <button
                    className="ml-4 mt-4 block rounded-md bg-sky-600 hover:bg-sky-300 hover:text-black hover:border-2 hover:border-sky-600 px-3 py-2
                text-white shadow-sm"
                  >
                    Edit / Delete
                  </button>
                </Link>
              </div>
            )}
          </Link>
        </div>
      </div>
    </main>
  );
}
