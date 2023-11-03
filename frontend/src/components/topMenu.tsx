import Image from "next/image";
import TopMenuItem from "./topMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row justify-between border-b-2 border-gray-300">
      <div className="flex items-center">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="w-48 text-center ml-6 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
              Sign out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="w-36 text-center ml-0 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
              Sign In
            </div>
          </Link>
        )}
        <Link href="/mybooking">
          <div className="w-40 text-center ml-2 mt-auto mb-auto color underline decoration-sky-500 text-gray-500">
            My Booking
          </div>
        </Link>
      </div>

      <div className="flex items-center">
        <TopMenuItem title="Booking" pageRef="/hospital" />
        <Image
          src="/img/logo.png"
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
