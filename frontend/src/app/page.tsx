import Banner from "@/components/banner";
import Footer from "@/components/footer";
import PromoteCard from "@/components/promoteCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";

export default async function Home() {
  // let sess = false;
  const session = await getServerSession(authOptions);
  // if (!session || !session.user.token) sess = false;
  // else sess = true
  return (
    <main>
      <Banner />
      <PromoteCard session={session}/>
    </main>
  );
}
