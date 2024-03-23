"use client";

import {
  FiAlignLeft,
  FiGift,
  FiPauseCircle,
  FiPlayCircle,
  FiX,
} from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [audio, setAudio] = useState(false);

  function navbarOpen() {
    setNavbar(true);
  }

  function navbarClose() {
    setNavbar(false);
  }

  function audioPlay() {
    setAudio(true);
  }
  function audioPause() {
    setAudio(false);
  }

  return (
    <>
      <section
        className={` left-0 bottom-0 top-0 right-0 z-30 ${navbar ? "fixed" : "hidden"} `}
      >
        <div className=" h-full bg-white w-full px-[7%] py-5">
          <button onClick={navbarClose}>
            <FiX className="absolute right-[7%] mt-5 mr-5 md:hidden  text-3xl" />
          </button>
          <div className="flex h-full ">
            <div className="m-auto flex flex-col font-light text-4xl gap-3">
              <Link onClick={navbarClose} href="#" className="navbar">
                Home
              </Link>
              <Link onClick={navbarClose} href="#about-us" className="navbar">
                About Us
              </Link>
              <Link onClick={navbarClose} href="#team" className="navbar">
                Team
              </Link>
              <Link
                href="#social-media"
                className="navbar"
                onClick={navbarClose}
              >
                Social Media
              </Link>
            </div>
          </div>
        </div>
      </section>

      <audio autoPlay loop muted={audio}>
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>

      <section className="sticky right-0 top-0  left-0 z-20">
        <nav className="flex justify-between items-center text-lg font-light px-[7%] py-5 bg-white bg-blend-color-burn">
          <button onClick={navbarOpen}>
            <FiAlignLeft className="text-2xl md:hidden" />
          </button>

          <div className="flex gap-2">
            <button className="animate-spin-slow text-xl">
              {audio ? (
                <FiPlayCircle onClick={audioPause} id="song-pause" />
              ) : (
                <FiPauseCircle onClick={audioPlay} id="song-play" />
              )}
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
