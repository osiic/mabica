import Image from "next/image";
import { SiInstagram, SiSpotify, SiWattpad } from "react-icons/si";
import Link from "next/link";

export default function SocialMedia() {
  return (
    <section
      className="min-h-screen snap-start px-[7%] pb-5 lg:flex lg:pt-5"
      id="social-media"
    >
      <div className="my-auto flex w-full flex-col justify-between py-20 lg:pl-56 ">
        <h2 className="mb-2 text-xl font-semibold">#Social Media</h2>
        <div className="flex flex-col gap-4 lg:flex-row-reverse lg:items-center">
          <div className=" aspect-[10/6] w-full overflow-clip rounded-xl bg-red-200 lg:aspect-square lg:w-full">
            {
              <Image
                className="h-full w-full overflow-clip rounded-lg bg-sky-50 object-cover"
                src="https://media.discordapp.net/attachments/1223064844341739581/1227941651113054288/Cover._noise.png?ex=662a3cc7&is=6617c7c7&hm=2cd4d398ceb73597d190d086893924450f56966d4586bf7876502bb91c187e59&=&format=webp&quality=lossless&width=1664&height=936"
                alt="gogogo"
                width="800"
                height="800"
              />
            }
          </div>
          <div className="">
            <span className=" text-3xl font-light">We are</span>
            <h2 className="-mt-2 mb-2 text-6xl ">Mabica</h2>
            <q className="mb-5 max-w-[80%] text-lg lg:mb-12 ">
              Kebahagiaan akan selalu datang di tengah kebersamaan. Apa pun itu,
              lakukanlah bersama-sama. Hidup ceria dan bahagia ketika senyum
              bersama.
            </q>
            <div className="flex gap-2 text-2xl lg:gap-3">
              <Link href="https://instagram.com">
                <SiInstagram />
              </Link>

              <Link href="https://instagram.com">
                <SiSpotify />
              </Link>

              <Link href="https://instagram.com">
                <SiWattpad />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
