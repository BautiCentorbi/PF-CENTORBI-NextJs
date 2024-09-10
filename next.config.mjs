/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        workerThreads: false //fixed the problem
    },
    images: {
        domains: ['firebasestorage.googleapis.com']
    }
};

export default nextConfig;
