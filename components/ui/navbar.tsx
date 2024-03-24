"use client";

import {
  FiAlignLeft,
  FiGift,
  FiPauseCircle,
  FiPlayCircle,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const newAudio = new Audio("/bgm.mp3");
    setAudio(newAudio); // Set the audio object when component mounts
    return () => {
      newAudio.pause(); // Pause audio when component unmounts
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audio) {
      if (audio !== null) {
        audio.play();
        audio.volume = 0.4;
      }
    }
  }, [isPlaying, audio]);

  function openClose() {
    setNavbar(!navbar);
  }

  const playPause = () => {
    if (audio !== null) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    }

    // Change the state of song
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section
        className={` left-0 bottom-0 top-0 right-0 z-30 ${navbar ? "fixed" : "hidden"} `}
      >
        <div className=" h-full bg-white w-full px-[7%] py-5">
          <button onClick={openClose}>
            <FiX className="absolute right-[7%] mt-5 mr-5 md:hidden  text-3xl" />
          </button>
          <div className="flex h-full ">
            <div className="m-auto flex flex-col font-light text-4xl gap-3">
              <Link onClick={openClose} href="#" className="navbar">
                Home
              </Link>
              <Link onClick={openClose} href="#about-us" className="navbar">
                About Us
              </Link>
              <Link onClick={openClose} href="#team" className="navbar">
                Team
              </Link>
              <Link href="#social-media" className="navbar" onClick={openClose}>
                Social Media
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky right-0 top-0  left-0 z-20">
        <nav className="flex justify-between items-center text-lg font-light px-[7%] py-5 bg-white bg-blend-color-burn">
          <button onClick={openClose}>
            <FiAlignLeft className="text-2xl md:hidden" />
          </button>

          <div className="flex gap-2">
            <button onClick={playPause} className="animate-spin-slow text-xl">
              {isPlaying ? <FiPlayCircle /> : <FiPauseCircle />}
            </button>
            <Link href="https://saweria.co/miii" target="_blank">
              <FiGift />
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
}
