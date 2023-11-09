"use client";
import { useRef, useEffect, useState } from "react";
import useWindowListener from "@/hooks/useWindowListener";

export default function VdoPlayer({
  vdoSrc,
  isPlaying,
}: {
  vdoSrc: string;
  isPlaying: boolean;
}) {
  const vdoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    // the code in this block will run if everything has been rendered
    if (isPlaying) vdoRef.current?.play();
    else vdoRef.current?.pause();
  }, [isPlaying]); // useEffect นี้จะทำงานก็ต่อเมื่อค่าของ isPlaying มีการเปลี่ยนแปลง
  // useWindowListener("resize", (e) => {
  //   alert((e.target as Window).innerWidth);
  // });

  return (
    <video className="w-[40%]" src={vdoSrc} ref={vdoRef} controls loop muted />
  );
}
