import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        // exclude /api path
        source: "/:path((?!api).*)*",
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
