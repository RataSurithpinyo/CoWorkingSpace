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
    "/img/cover4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user.token);
  return (
    <div
      className={styles.banner}
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <Image
        src={covers[index % 4]}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1
          className="text-4xl font-semibold"
          style={{ marginTop: "40px", marginBottom: "10px" }}
        >
          Vaccine Service Center
        </h1>
        <h3 className="text-xl">
          Find the right hospital. Make an appointment.
        </h3>
      </div>
      {session ? (
        <div className="mt-2 z-30 absolute top-5 right-10 font-semibold text-white text-lg">
          {" "}
          Welcome, {session.user?.name}{" "}
        </div>
      ) : null}
      <button
        className="bg-white text-cyan-600 border border-cyan-600 
      font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-1 right-2 hover:bg-cyan-600 hover:text-white"
        onClick={(e) => {
          router.push("/hospital");
          e.stopPropagation();
        }}
      >
        {/* ต้องยก layer ในแกน z ไม่งั้นจะไม่เห็นปุ่่ม */}
        Select your hospital NOW
      </button>
    </div>
  );
}
