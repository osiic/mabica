/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.clerk.com",
      },
      {
        hostname: "media.discordapp.net",
      },
    ],
  },
};

export default nextConfig;
