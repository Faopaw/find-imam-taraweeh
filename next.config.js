/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    PERSONAL_ACCESS_TOKEN: "CFPAT-fcueJ3JgHAfAxhshmTyf-xT-pBBA5hC3UPjqQ1ak7Wk",
    CONTENTFUL_SPACE_ID : `jy2mhidk2k1l`,
    AUTH0_SECRET:'1dbd7dc5ac184e5161e30a272bce8e60417f227fa69774e3ebf008df43e4ecec'
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
