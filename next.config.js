/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PERSONAL_ACCESS_TOKEN: "CFPAT-fcueJ3JgHAfAxhshmTyf-xT-pBBA5hC3UPjqQ1ak7Wk",
    CONTENTFUL_SPACE_ID: `jy2mhidk2k1l`,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: 'AIzaSyAvuRFQ_KE3yCnyfUDRxZXvi9Il7NQ3kdk'
    // AIzaSyAvuRFQ_KE3yCnyfUDRxZXvi9Il7NQ3kdk - google maps 

  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
