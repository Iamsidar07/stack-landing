import { withContentlayer } from "next-contentlayer";
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

// Merge MDX config with Next.js config
export default withContentlayer(nextConfig);
