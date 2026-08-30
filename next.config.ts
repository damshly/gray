import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // مطلوب عند استخدام التصدير الإستاتيكي مع Next/Image
  },
};

export default nextConfig;