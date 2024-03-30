import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col my-4 min-h-[80dvh]">
      <div className="flex w-full px-[7%] max-w-5xl justify-between items-center">
        <Link href="/">Back in Home</Link>
      </div>
      <div className=" m-auto">
        <SignIn />
      </div>
    </div>
  );
}
