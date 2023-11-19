"use client";
import { Children } from "react";
import styles from "./card.module.css";
import Image from "next/image";

export default function InteractiveCard({
  children,
  contentName,
}: {
  children: React.ReactNode;
  contentName: string;
}) {

  function onCardMouseAction(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.add("shadow-2xl");
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("bg-emerald-50");
    } else {
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");
      event.currentTarget.classList.remove("bg-emerald-50");
      event.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="w-full h-[300px] rounded-lg shadow-lg bg-white"
      onMouseOver={(e) => onCardMouseAction(e)}
      onMouseOut={(e) => onCardMouseAction(e)}
    >
      {children}
    </div>
  );
}
