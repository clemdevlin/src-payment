/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverActions: {
    bodySizeLimit: '5mb',
  },
};
module.exports = nextConfig;
