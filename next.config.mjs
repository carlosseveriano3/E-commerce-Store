/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {hostname: "leitura.com.br"}
    ]
  }
};

export default nextConfig;