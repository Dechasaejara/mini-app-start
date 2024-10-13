/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { // [!code ++]
        serverComponentsExternalPackages: ['grammy'], // [!code ++]
    },
};

export default nextConfig;
