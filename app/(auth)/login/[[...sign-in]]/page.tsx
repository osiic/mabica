import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="my-4 flex min-h-[80dvh] flex-col">
      <div className="flex w-full max-w-5xl items-center justify-between px-[7%]">
        <Link href="/">Back in Home</Link>
      </div>
      <div className=" m-auto">
        <SignIn />
      </div>
    </div>
  );
}
