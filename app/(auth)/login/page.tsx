import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen">
      <div className=" m-auto">
        <SignIn />
      </div>
    </div>
  );
}
