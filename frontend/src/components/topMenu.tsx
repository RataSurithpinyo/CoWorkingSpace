import Image from "next/image";
import TopMenuItem from "./topMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { useRouter } from "next/navigation";
import getUserProfile from "@/libs/getUserProfile";
export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  return (
    <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row justify-between border-b-2 border-gray-300">
      {profile.data.role !== "admin" ? (
        <div className="flex items-center">
          <Link href="/mybooking">
            <div className="w-32 text-center ml-2 mt-auto mb-auto color underline decoration-green-500 text-black">
              My Booking
            </div>
          </Link>
          <TopMenuItem title="Cowoking Spaces" pageRef="/coworkingspace" />
        </div>
      ) : (
        <div className="flex items-center">
          <Link href="/managebooking">
            <div className="w-64 text-center ml-2 mt-auto mb-auto color underline decoration-green-500 text-black">
              Manage Booking
            </div>
          </Link>
        </div>
      )}

      <div className="flex items-center">
        {/* <TopMenuItem title="Booking" pageRef="/hospital" /> */}
        <div className="flex items-center">
          {session ? (
            <Link href="/api/auth/signout">
              <div className="w-48 text-center ml-6 mt-auto mb-auto color underline decoration-green-500 text-black font-bold">
                Sign out of {session.user?.name}
              </div>
            </Link>
          ) : (
            <Link href="/api/auth/signin">
              <div className="w-32 text-center ml-0 mt-auto mb-auto color underline decoration-green-500 text-black font-bold">
                Sign In
              </div>
            </Link>
          )}
        </div>
        <Image
          src="/img/apple.png"
          className="mt-1 ml-3 mr-5 mb-1 h-10/12 w-auto flex justify-end"
          alt="logo"
          width={0}
          height={0}
          sizes="5vh"
        />
      </div>
    </div>
  );
}
