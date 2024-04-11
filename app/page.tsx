import { Navbar, SocialMedia } from "./_components";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function PageHome() {
  const { userId } = auth();
  const req = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/users?limit=4`, {
    cache: "no-cache",
  });
  const dataTeam = await req.json();

  return (
    <div className="min-w-screen-md mx-auto h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {!!userId && (
        <Link
          className="fixed bottom-5 right-2 z-50 rounded border border-black px-4 py-1 transition delay-300 hover:bg-black hover:text-white "
          href="/profile"
        >
          Profile
        </Link>
      )}
      <section
        id="home"
        className="flex h-[100dvh] snap-start items-center justify-center text-4xl font-semibold lg:text-5xl"
      >
        <h1>mabica</h1>
      </section>

      <Navbar />

      <section
        className="flex min-h-screen snap-start flex-col px-[7%] pb-5 pt-20 lg:pt-2"
        id="about-us"
      >
        <div className="my-auto lg:pl-56">
          <h2 className="mb-2 text-xl font-semibold lg:text-3xl">#AboutUs</h2>
          <h3 className="text-4xl font-semibold lg:text-5xl">
            What Is Mabica?
          </h3>
          <div className="lgmax-w-screen-xl mb-4 max-w-screen-sm text-sm font-normal lg:mb-8 lg:mt-4 lg:text-lg">
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
            className="mt-4 block w-28 rounded-bl-xl rounded-tr-xl border border-black bg-black px-1 py-2 text-center text-white transition duration-300 hover:bg-white hover:text-black"
          >
            More+
          </Link>
        </div>
      </section>

      <section
        className="flex min-h-screen snap-start flex-col px-[7%] pb-5 pt-20 lg:pt-5  "
        id="team"
      >
        <div className="my-auto flex flex-col py-5 lg:py-20 lg:pl-56  ">
          <h2 className="mb-2 text-right text-xl font-semibold lg:mb-4 lg:text-left lg:text-3xl">
            #Team
          </h2>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
            {dataTeam?.data.map((item: any, index: string) => (
              <div
                key={index}
                className="aspect-[7/6] cursor-pointer overflow-clip rounded-bl-xl rounded-tr-xl bg-black/10 shadow-md shadow-black/25 transition duration-300 hover:bg-black/60 lg:aspect-[8/15]"
              >
                <Image
                  src={item?.image_url}
                  alt={item?.first_name}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition duration-300
                hover:scale-110"
                />
              </div>
            ))}
          </div>
          <Link
            href="/team"
            className="m mx-auto mt-4 min-w-28 rounded-bl-xl rounded-tr-xl border  border-black bg-black px-1 py-2 text-center text-white transition duration-300 hover:bg-white hover:text-black"
          >
            More+
          </Link>
        </div>
      </section>

      <SocialMedia />

      <footer className="snap-start px-[7%] pb-5 pt-5 text-center" id="footer">
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
