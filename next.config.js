/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    PERSONAL_ACCESS_TOKEN: "CFPAT-fcueJ3JgHAfAxhshmTyf-xT-pBBA5hC3UPjqQ1ak7Wk",
    CONTENTFUL_SPACE_ID : `jy2mhidk2k1l`
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      },
    ],
  },
}


module.exports = nextConfig
