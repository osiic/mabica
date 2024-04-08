import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  let limit = searchParams.get("limit");
  let offset = searchParams.get("offset");
  offset ? offset = `&offset=${offset}` : offset = '&offset=0'
  limit ? limit = `&limit=${limit}` : limit = '&limit=10'

  const res = await fetch(`https://api.clerk.com/v1/users?order_by=updated_at${limit + offset}`, {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
    cache: "no-cache",
  });

  const data = await res.json();

  return Response.json({ data });
}
