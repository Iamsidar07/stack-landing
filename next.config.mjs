/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "stack-auth.com",
      },
    ],
  },
};

export default nextConfig;
