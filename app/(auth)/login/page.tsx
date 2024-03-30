import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex h-screen">
      <div className="flex w-full px-[7%] max-w-5xl justify-between items-center">
        <Link href="/">Back in Home</Link>
      </div>
      <div className=" m-auto">
        <SignIn />
      </div>
    </div>
  );
}
