import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force non-streaming metadata for all user agents (including browsers in dev).
  // This eliminates the MetadataWrapper hidden-attribute hydration mismatch in
  // Next.js 16 where the server emits <div style="display:contents"> but the
  // client expects <div hidden>.
  htmlLimitedBots: /.*/,
};

export default nextConfig;
