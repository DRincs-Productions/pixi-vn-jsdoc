import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    serverExternalPackages: ['@takumi-rs/image-response'],
    output: "export",
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "pixijs.io" },
            { protocol: "https", hostname: "github.com" },
            { protocol: "https", hostname: "pixijs.download" },
            { protocol: "https", hostname: "firebasestorage.googleapis.com" },
        ],
        unoptimized: true,
    },
};

export default withMDX(config);
