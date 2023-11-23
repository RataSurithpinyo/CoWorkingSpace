'use client'
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
export default function Footer() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false);
  //const playAudio = () => {
    console.log('playAudio')
    const audioRef = useRef<HTMLAudioElement>(new Audio('/sound.mp3'));
    useEffect(() => {
      // the code in this block will run if everything has been rendered
      if (isPlaying) audioRef.current?.play();
      else audioRef.current?.pause();
    }, [isPlaying]);
    // const audio = new Audio('/sound.mp3');
    // if (!isPlaying) {
    //   audio.loop = true;
    //   audio.play();
    // } else {
    //   console.log("OK")
    //   audio.pause();
    //   audio.currentTime = 0;
    // }

    // setIsPlaying(!isPlaying);
  // };

  return (
    <div className="bg-green-900 fixed bottom-0 left-0 right-0 text-center py-4 lg:px-4">
      <div
        className="hover:cursor-pointer p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-green-200 uppercase px-2 py-1 text-xs font-bold mr-3">
          🍏
        </span>
        <span className="font-semibold mr-2 text-left flex-auto"
        onClick={() => {
          router.push("/");
          router.refresh()
        }}
        >
          Click here to go back @Home Page
        </span>
        
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
        
      </div>
      <div
        className="ml-4 hover:cursor-pointer p-2 bg-green-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
        onClick={() => {
          setIsPlaying(!isPlaying)
        }}
      >
        <span className="flex rounded-full bg-yellow-200 uppercase px-2 py-1 text-xs font-bold mr-3">
        {isPlaying ? '🛑' : '🎧'}
        </span>
        <span className="font-semibold mr-2 text-left flex-auto"
        >
          Click here to {isPlaying ? 'stop' : 'play'} audio
        </span>
        
        <svg
          className="fill-current opacity-75 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
        </svg>
      </div>
    </div>
  );
}
