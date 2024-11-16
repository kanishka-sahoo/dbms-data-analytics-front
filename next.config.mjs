
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          pathname: '/**',
        },
      ],
    },
    // Enable strict mode for better development experience
    reactStrictMode: true,
    // Optimize build output
    swcMinify: true,
  }
  
export default nextConfig;
