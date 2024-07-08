/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: "leitura.com.br"},
      {hostname: "cdn.dummyjson.com"}
    ]
  }
};

export default nextConfig;