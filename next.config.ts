import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/app", // Your Webflow Cloud mount path
  assetPrefix: "/app", // Must match basePath
};

export default nextConfig;

// Enable Cloudflare development mode
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}
