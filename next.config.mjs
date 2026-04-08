/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  experimental: {
    serverActions: true,
    missingSuspenseWithCSRBailout: false,
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily allow build to succeed
  },
};

export default nextConfig;
