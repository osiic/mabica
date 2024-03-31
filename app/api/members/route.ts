import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  if (!id) return Response.json({ data: null }, { status: 400 });

  const res = await fetch(
    `https://discord.com/api/v10/guilds/1216411716540174538/members/${id}`,
    {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    },
  );

  const result = await res.json();

  if (!result?.roles) return Response.json({ data: null }, { status: 400 });

  const status = result?.roles.includes("1217859898419970109")
    ? "pengurus"
    : "member";

  const data = {
    id: result?.user.id,
    status,
    username: result?.user?.username,
  };

  return Response.json({ data });
}
