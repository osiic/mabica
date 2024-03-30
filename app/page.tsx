import { Navbar } from "@/components/ui/navbar";
import Image from "next/image";
import Link from "next/link";

export default function PageHome() {
  return (
    <div className="min-w-screen-md mx-auto">
      <section className="flex h-[100dvh] justify-center items-center font-semibold text-4xl lg:text-5xl">
        <h1>mabica</h1>
      </section>

      <Navbar />

      <section
        className="pt-2 pb-5 px-[7%] lg:h-screen flex flex-col"
        id="about-us"
      >
        <div className="lg:pl-56 my-auto">
          <h2 className="font-semibold text-xl mb-2 lg:text-3xl">#AboutUs</h2>
          <h3 className="font-semibold text-4xl lg:text-5xl">
            What Is Mabica?
          </h3>
          <p className="font-normal text-sm mb-4 max-w-screen-sm lg:hidden">
            Mabica (Mari Bikin Cerita) adalah perkumpulan orang gabut yang
            mungkin membuat cerita supaya tidak {`"`}Rin udah makan{`"`} atau{" "}
            {`"`}sehat?
            {`"`} saat bermain discord.
          </p>
          <div className="hidden font-normal text-lg mb-8 mt-4 lg:block">
            Mabuca (Mari Bikin Cerita) Project adalah sebuah perkumpulan yang
            beranggotakan orang-orang yang memiliki minat dalam membuat cerita.
            Mereka berkumpul untuk berkolaborasi dalam menciptakan cerita-cerita
            yang kemudian diunggah di berbagai platform seperti Spotify dan
            platform lainnya. Tujuan dari perkumpulan ini adalah untuk
            menghasilkan karya-karya yang menarik dan menghibur bagi para
            pendengar atau pembaca.
            <br />
            <br />
            Selain itu, salah satu hal yang menjadi perhatian dalam perkumpulan
            ini adalah menjaga kesehatan mental anggotanya. Dengan melakukan
            kegiatan seperti bermain Discord, mereka berusaha untuk menghindari
            perasaan bosan atau stres yang dapat mengganggu kreativitas mereka.
            Dengan begitu, mereka dapat tetap produktif dan tetap menjaga
            keseimbangan antara pekerjaan dan rekreasi.
          </div>
          <Link
            href="/about-us"
            className="hover:bg-white text-center hover:text-black duration-300 transition border-black border block bg-black mt-4 text-white rounded-tr-xl rounded-bl-xl w-28 py-2 px-1"
          >
            More+
          </Link>
        </div>
      </section>

      <section
        className="px-[7%] flex flex-col pt-5 pb-5 lg:min-h-screen  "
        id="team"
      >
        <div className="lg:pl-56 my-auto flex flex-col py-5 lg:py-20  ">
          <h2 className="font-semibold text-xl text-right lg:text-left lg:text-3xl lg:mb-4 mb-2">
            #Team
          </h2>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4">
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] object-cover lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-md">
              <Image
                src="/templet.webp"
                alt="image"
                width={500}
                height={800}
                className="object-fill w-full h-full
                hover:scale-110"
              />
            </div>
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
            <div className="hover:bg-black/60 overflow-clip bg-black/10 duration-300 transition aspect-[7/16] lg:aspect-[10/16] rounded-tr-xl rounded-bl-xl shadow-black/25 shadow-sm"></div>
          </div>
          <Link
            href="/team"
            className="hover:bg-white text-center hover:text-black duration-300 transition border-black border  mx-auto bg-black mt-4 text-white rounded-tr-xl rounded-bl-xl m min-w-28 py-2 px-1"
          >
            More+
          </Link>
        </div>
      </section>

      <section
        className="px-[7%] pb-5 pt-5 lg:flex lg:h-screen"
        id="social-media"
      >
        <div className="lg:pl-56 my-auto flex flex-col w-full justify-between py-20 ">
          <h2 className="font-semibold text-xl text-center mb-2">
            #Social Media
          </h2>
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="hover:bg-black text-center hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black"
            >
              Spotify
            </Link>
            <Link
              href="/"
              className="hover:bg-black text-center hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black"
            >
              Wattpad
            </Link>
            <Link
              href="/"
              className="hover:bg-black text-center hover:text-white text-black transition duration-300 w-full bg-white py-2 rounded-tr-lg rounded-bl-lg font-semibold text-l border-[1.5px] shadow border-black"
            >
              Instagram
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-[7%] text-center  pb-5 pt-5" id="footer">
        <div className="lg:pl-56">
          <div className="space-x-1 text-black/90" id="footer">
            <Link href="/">Informasi Bisnis</Link>
            <span>l</span>
            <Link href="/">Kebijakan Privasi</Link>
          </div>
          <span className="text-sm font-light text-black">
            Copyright © 2024 Mabica
          </span>
        </div>
      </footer>
    </div>
  );
}
