"use client";
import { use, useState } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const covers = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user.token);
  if (session) {
    localStorage.setItem("username", session.user.name);
    localStorage.setItem("token", session.user.token);
}
  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        className="mt-0"
        src={covers[index % 3]}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1
          className="text-4xl font-semibold"
          style={{ marginTop: session ? "40px" : "0px", marginBottom: "10px" }}
        >
          Coworking Space
        </h1>
        <h3 className="text-xl">
          Find the right Coworking Space with pleasing facilities
        </h3>
      </div>
      {session ? (
        <div className="mt-2 z-30 absolute top-5 right-10 font-semibold text-white text-lg">
          {" "}
          Welcome back :-) {session.user?.name}{" "}
        </div>
      ) : null}

      {session ? (
        <button
          className="bg-white text-green-600 border border-green-600 
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-1 right-2 hover:bg-green-600 hover:text-white"
          onClick={(e) => {
            router.push("/coworkingspace");
            e.stopPropagation();
          }}
        >
          All Coworking Spaces
        </button>
        
      ) : null}
      {/* ต้องยก layer ในแกน z ไม่งั้นจะไม่เห็นปุ่่ม */}
    </div>
  );
}
