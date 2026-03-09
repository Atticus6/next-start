import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        // exclude /api and /.well-known paths
        source: "/:path((?!api|.well-known).*)*",
        destination: "/spa",
        // has: [
        //   {
        //     type: "header",
        //     key: "x-invoke-method",
        //     //  Only handle GET requests
        //     value: "GET",
        //   },
        // ],
      },
    ];
  },
};

export default nextConfig;
