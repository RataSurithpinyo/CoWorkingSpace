import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TopMenu from "@/components/topMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NextAuthProvider from "@/providers/nextAuthProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coworking Space",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log(session)
  // if (!session || !session.user.token) return null;
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <NextAuthProvider session={session}>
          <div className="mb-0">
            <TopMenu />
            {children}
            <Footer />
          </div>
        </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
