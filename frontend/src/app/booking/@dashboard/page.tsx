import { useSearchParams } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  // var createdAt = new Date(profile.data.createdAt);

  return (
    <div>
      <div className="mt-36 text-xl text-center underline decoration-green-500 ">
        User Profile
      </div>
      <div className="mt-4 text-sm text-center">
        <p>Name: {profile.data.name}</p>
        <p>Email: {profile.data.email}</p>
        <p>Tel: {profile.data.tel}</p>
        {/* <p>Member since {createdAt.toString()}</p> */}
      </div>
    </div>
  );
}
