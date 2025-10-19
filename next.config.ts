import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_ALLOWED_IIIT_DOMAINS: process.env.ALLOWED_IIIT_DOMAINS,
  },
};

export default nextConfig;
