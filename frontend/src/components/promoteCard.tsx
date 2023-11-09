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
      <VdoPlayer vdoSrc="/vdo/coworkingspace.mp4" isPlaying={playing}></VdoPlayer>
      <div className="m-5">
        <p className="font-bold">Explore our finest Coworking Spaces</p>
        Don't have an account?
        <button
          className="block rounded-md bg-sky-600 hover:bg-sky-400 px-3 py-2
           text-white shadow-sm mt-2"
          // onClick={() => setPlaying(!playing)}
        >
          {/* {playing ? "Pause" : "Play"} */}
          Sign Up
        </button>
        <p className="font-bold mt-4">Or you can login here</p>
        <button
          className="block rounded-md bg-green-600 text-white px-3 py-2
            shadow-sm mt-2 hover:bg-green-200 hover:text-green-600"
        >
          Log In
        </button>
      </div>
      <div className="flex flex-col items-end">
      <img src="/img/book.gif" alt="my-gif" className="block w-52"/>
      </div>
    </div>
  );
}
