/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    //"image": "https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        pathname: '/free-photo/**',
      },
    ],
  },
};

export default nextConfig;
