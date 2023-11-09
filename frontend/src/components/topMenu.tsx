import Image from "next/image";
import TopMenuItem from "./topMenuItem";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
//     /* From https://css.glass */
// background: rgba(188, 255, 198, 0.2);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(5px);
// -webkit-backdrop-filter: blur(5px);
// border: 1px solid rgba(188, 255, 198, 0.3);
    <div className="h-14 bg-white fixed top-0 left-0 right-0 z-30 flex flex-row justify-between border-b-2 border-gray-300">
      <div className="flex items-center">
        {session ? (
          <Link href="/api/auth/signout">
            <div className="w-48 text-center ml-6 mt-auto mb-auto color underline decoration-green-500 text-gray-500">
              Sign out of {session.user?.name}
            </div>
          </Link>
        ) : (
          <Link href="/api/auth/signin">
            <div className="w-32 text-center ml-0 mt-auto mb-auto color underline decoration-green-500 text-gray-500">
              Sign In
            </div>
          </Link>
        )}
        <Link href="/mybooking">
          <div className="w-32 text-center ml-2 mt-auto mb-auto color underline decoration-green-500 text-gray-500">
            My Booking
          </div>
        </Link>
      </div>

      <div className="flex items-center">
        <TopMenuItem title="Booking" pageRef="/hospital" />
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
