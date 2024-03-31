import { UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex min-h-screen py-10 gap-4 flex-col justify-center items-center">
      <div className="flex w-full px-[7%] max-w-5xl justify-between items-center">
        <div className="space-x-2">
          <Link href="/">Back in Home</Link>
          <Link
            className=" border hover:bg-black hover:text-white transition delay-300 border-black px-4 py-1 rounded "
            href="/profile"
          >
            Profile
          </Link>
        </div>
        <UserButton />
      </div>
      <UserProfile />
    </div>
  );
}
