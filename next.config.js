/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['sonnt-ag.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/leistungen',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/ueber-uns',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
