import Banner from "@/components/banner";
import Footer from "@/components/footer";
import PromoteCard from "@/components/promoteCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token);
  return (
    <main>
      <Banner />
      <PromoteCard session={session}/>
    </main>
  );
}
