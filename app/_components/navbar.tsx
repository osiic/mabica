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

export default function Navbar() {
  const [navbar, setNavbar] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const newAudio = new Audio("/bgm.mp3");
    setAudio(newAudio);
    return () => {
      newAudio.pause();
    };
  }, []);

  useEffect(() => {
    if (isPlaying && audio) {
      if (audio !== null) {
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

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <section className="sticky left-0 right-0 top-0 z-20 lg:z-40 dark:bg-[#121212]  ">
        <nav className="flex items-center justify-between px-[7%] py-5 text-lg font-light bg-blend-color-burn">
          <span className="hidden text-3xl font-semibold lg:block">Mubica</span>
          <button onClick={openClose}>
            <FiAlignLeft className="text-2xl lg:hidden" />
          </button>

          <div className="flex gap-2 lg:text-2xl">
            <button
              onClick={playPause}
              className={`${isPlaying && "animate-spin-slow"} text-xl lg:text-2xl`}
            >
              {isPlaying ? <FiPlayCircle /> : <FiPauseCircle />}
            </button>
            <Link href="https://saweria.co/miii" target="_blank">
              <FiGift />
            </Link>
          </div>
        </nav>
      </section>

      <section
        className={`fixed top-0  z-30 -mb-[100dvh] w-screen ${navbar ? "block" : "hidden"} dark:bg-[#121212]  lg:max-h- lg:sticky lg:block lg:w-fit `}
      >
        <div className=" h-[100dvh] w-full py-5 lg:h-[90vh] lg:w-52 lg:pl-[7%]">
          <button onClick={openClose}>
            <FiX className="absolute right-[7%] mr-5 mt-5 text-3xl  lg:hidden" />
          </button>
          <div className="flex h-full ">
            <div className="m-auto flex flex-col gap-3 text-4xl font-light lg:gap-2 lg:text-xl">
              <Link onClick={openClose} href="#home" className="navbar">
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
    </>
  );
}
