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
      <section className="sticky right-0 top-0 lg:z-40 left-0 z-20">
        <nav className="flex justify-between items-center text-lg font-light px-[7%] py-5 bg-white bg-blend-color-burn">
          <span className="hidden lg:block text-3xl font-semibold">Mubica</span>
          <button onClick={openClose}>
            <FiAlignLeft className="text-2xl lg:hidden" />
          </button>

          <div className="flex gap-2 lg:text-2xl">
            <button
              onClick={playPause}
              className={`${isPlaying && "animate-spin-slow"} lg:text-2xl text-xl`}
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
        className={`fixed top-0  w-screen z-30 -mb-[100dvh] ${navbar ? "block" : "hidden"} lg:w-fit bg-pink-300 lg:block lg:max-h- lg:sticky `}
      >
        <div className=" h-[100dvh] w-full py-5 lg:pl-[7%] bg-white lg:h-[90vh] lg:w-52">
          <button onClick={openClose}>
            <FiX className="absolute right-[7%] mt-5 mr-5 lg:hidden  text-3xl" />
          </button>
          <div className="flex h-full ">
            <div className="m-auto flex flex-col font-light text-4xl lg:text-xl lg:gap-2 gap-3">
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
    </>
  );
}
