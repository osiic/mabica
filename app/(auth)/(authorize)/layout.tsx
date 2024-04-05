import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

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
    // console.log({ get: data });

    // jika status nya tidak ada kembalikan not founs
    if (!data?.member) {
      const res = await fetch(
        `https://api.clerk.com/v1/users/${data?.userId}`,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
          },
          cache: "force-cache",
        },
      );
      const dataDelete = await res.json();
      // console.log({ delete: dataDelete });

      if (dataDelete?.delete) {
        return (
          <section className="flex h-[100dvh] items-center justify-center  text-center text-2xl font-semibold lg:text-3xl">
            <h1>Hayo ngapain.</h1>
          </section>
        );
      }
    }
    // jika status nya ada kembalikan ini
    return <>{children}</>;
  } catch (err) {
    return notFound();
  }
}
