import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configFilePath = fileURLToPath(import.meta.url);
const projectRoot = path.dirname(configFilePath);

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
