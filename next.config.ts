import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:locale/solutions/modular-wes',
        destination: '/:locale/technology/modular-wes',
        permanent: true,
      },
      {
        source: '/:locale/solutions/digital-twin',
        destination: '/:locale/technology/digital-twin',
        permanent: true,
      },
      {
        source: '/:locale/solutions/fleet-management',
        destination: '/:locale/technology/fleet-management',
        permanent: true,
      },
      {
        source: '/:locale/solutions/brownfield',
        destination: '/:locale/solutions/brownfield-modernization',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
