import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;

  return (
    <div className="flex min-h-screen py-10 gap-4 flex-col justify-center items-center">
      {
        // <div className="max-w-screen-md overflow-auto">
        //   {JSON.stringify(user)}
        // </div>
      }
      <div className="flex w-full px-[7%] max-w-5xl justify-between items-center">
        <Link href="/">Home</Link>
        <UserButton />
      </div>
      <UserProfile />
    </div>
  );
}
