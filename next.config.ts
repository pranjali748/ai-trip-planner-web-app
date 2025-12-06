/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" }, // <-- add this
      { protocol: "https", hostname: "assets.aceternity.com" }, // optional if you use this too
    ],
  },
};

export default nextConfig;
