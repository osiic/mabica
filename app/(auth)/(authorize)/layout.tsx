import { notFound } from "next/navigation";
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
  if (!data) return notFound();

  // jika status nya ada kembalikan ini
  return <>{children}</>;
}
