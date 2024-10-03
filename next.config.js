/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js

module.exports = {
  // Other configurations...
  api: {
      bodyParser: false, // Disable body parsing for webhook route
  },
};


module.exports = nextConfig
