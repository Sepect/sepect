/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    // basePath: isProd ? '/sepect' : '',
}

module.exports = nextConfig
