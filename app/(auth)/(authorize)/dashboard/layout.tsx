import { currentUser } from "@clerk/nextjs";
import { notFound } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {

    // ambil data id user
    const user = await currentUser();
    const userId = user?.id;
    const userDiscordId = user?.externalAccounts[0]?.externalId;

    // cek pakai api/members
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/members?id=${userDiscordId}&user-id=${userId}`,
    );
    const { data } = await res.json();

    console.log(data)
    // jika status nya tidak ada kembalikan not founs
    if (data?.status === "member") {
      return (
        <section className="flex h-[100dvh] items-center justify-center  text-center text-2xl font-semibold lg:text-3xl">
          <h1>Sadarr, <br />Elu tuh member</h1>
        </section>
      );
    } else if (data?.status !== "pegurus") {
      return <>{children}</>;
    }

    // jika status nya ada kembalikan ini
    return notFound();

  }
  catch (err) {
    return notFound()
  }
}
