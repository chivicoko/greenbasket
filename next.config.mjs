/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'assets.dummyjson.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
                port: '',
            },
        ],  
    }
};

export default nextConfig;
