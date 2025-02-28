import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* 기존 설정 유지 */
    experimental: {
        ppr: 'incremental',
    },

    /* API 프록시 설정 */
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://192.168.10.204:8006/api2/json/:path*', // Proxy to Backend
            },
        ];
    },
};

export default nextConfig;