import { UserButton, UserProfile } from "@clerk/nextjs";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 py-10">
      <div className="flex w-full max-w-5xl items-center justify-between px-[7%]">
        <div className="space-x-2">
          <Link href="/">Back in Home</Link>
          <Link
            className=" rounded border border-black px-4 py-1 transition delay-300 hover:bg-black hover:text-white "
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
