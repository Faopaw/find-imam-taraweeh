/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PERSONAL_ACCESS_TOKEN: "CFPAT-fcueJ3JgHAfAxhshmTyf-xT-pBBA5hC3UPjqQ1ak7Wk",
    CONTENTFUL_SPACE_ID: `jy2mhidk2k1l`,

    AUTH0_SECRET:
      "1dbd7dc5ac184e5161e30a272bce8e60417f227fa69774e3ebf008df43e4ecec",
    AUTH0_BASE_URL: "https://*.vercel.app/" || "http://localhost:3000",
    AUTH0_ISSUER_BASE_URL: "https://dev-au81z8esmiyhmtaq.uk.auth0.com",
    clientID: "NGp0Z4XlKlfukvbx5tNVFLre0mlNuSZF",
    AUTH0_CLIENT_SECRET:
      "01FhrqZMSd52McRG2dEQLwqcRaB3nraCGnlxI5j4KZL84oIP4P1LRnVHjwadaQqa",
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
