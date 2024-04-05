import { currentUser } from "@clerk/nextjs";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ambil data id user
  const user = await currentUser();
  const userId = user?.externalAccounts[0]?.externalId;

  // cek pakai api/members
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/members?id=${userId}`,
  );
  const { data } = await res.json();

  // jika status nya tidak ada kembalikan not founs
  if (data?.status !== "pengurus") {
    return (
      <section className="flex h-[100dvh] items-center justify-center  text-center text-2xl font-semibold lg:text-3xl">
        <h1>Sorry Anda Bukan Admin.</h1>
      </section>
    );
  }

  // jika status nya ada kembalikan ini
  return <>{children}</>;
}
