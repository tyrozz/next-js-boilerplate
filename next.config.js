/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = withContentlayer(nextConfig)
