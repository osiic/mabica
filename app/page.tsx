import Image from "next/image";
import Link from "next/link";
import { FiAlignLeft, FiGift, FiPlayCircle } from "react-icons/fi";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto">
      <section className="flex h-screen justify-center items-center font-semibold text-4xl">
        <h1>mabica</h1>
      </section>

      <section className=" left-0 right-0 top-0 ">
        <nav className="flex justify-between items-center text-lg font-light px-[7%] py-5 bg-white bg-blend-color-burn">
          <button>
            <FiAlignLeft className="text-2xl" />
          </button>

          <div className="flex gap-2">
            <button>
              <FiPlayCircle />
            </button>
            <Link href="/">
              <FiGift />
            </Link>
          </div>
        </nav>
      </section>

      <section className="pt-2 pb-5 px-[7%]" id="about us">
        <h2 className="font-semibold text-xl mb-2">#AboutUs</h2>
        <h3 className="font-semibold text-4xl">What Is Mabica?</h3>
        <p className="font-normal text-sm">
          Mabica (Mari Bikin Cerita) adalah perkumpulan orang gabut yang mungkin
          membuat cerita supaya tidak {`"`}Rin udah makan{`"`} atau {`"`}sehat?
          {`"`} saat bermain discord.
        </p>
        <button className="hover:bg-white hover:text-black transition border-black border  mx-auto bg-black mt-4 text-white rounded-tr-xl rounded-bl-xl m min-w-28 py-2 px-1">
          More+
        </button>
      </section>

      <section className="px-[7%] flex flex-col pt-5 pb-5 " id="team">
        <h2 className="font-semibold text-xl text-right mb-2">#Team</h2>
        <div className="grid grid-cols-3 gap-2">
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
        </div>
        <button className="hover:bg-white hover:text-black duration-300 transition border-black border  mx-auto bg-black mt-4 text-white rounded-tr-xl rounded-bl-xl m min-w-28 py-2 px-1">
          More+
        </button>
      </section>

      <section className="px-[7%] pb-5 pt-5 " id="social media">
        <h2 className="font-semibold text-xl text-center mb-2">#Team</h2>
        <div className="flex flex-col gap-1">
          <button className="hover:bg-black hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black">
            Spotify
          </button>
          <button className="hover:bg-black hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black">
            Wattpad
          </button>
          <button className="hover:bg-black hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black">
            Instagram
          </button>
        </div>
      </section>

      <footer className="px-[7%] text-center  pb-5 pt-5" id="footer">
        <div className="space-x-1 text-black/90" id="footer">
          <span>Informasi Bisnis</span>
          <span>l</span>
          <span>Kebijakan Privasi</span>
        </div>
        <span className="text-sm font-light text-black">
          Copyright © 2024 Mabica
        </span>
      </footer>
    </div>
  );
}
