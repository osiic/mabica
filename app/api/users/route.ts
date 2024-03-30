export async function GET() {
  const res = await fetch("https://api.clerk.com/v1/users", {
    headers: {
      Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
    },
    cache: "force-cache",
  });
  const data = await res.json();

  return Response.json({ data });
}
