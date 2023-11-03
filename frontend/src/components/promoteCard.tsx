"use client";
import VdoPlayer from "./vdoPlayer";
import { useState } from "react";
import useWindowListener from "@/hooks/useWindowListener";

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true);
  useWindowListener("contextmenu", (e) => e.preventDefault());

  return (
    <div
      className="w-[70%] shadow-lg mx-[15%] my-10 p-2 rounded-lg bg-white
        flex content-center"
    >
      <VdoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing}></VdoPlayer>
      <div className="m-5">
        Get your vaccine today.
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2
           text-white shadow-sm mt-2"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}
