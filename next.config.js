/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
        'links.papareact.com',
        'platform-lookaside.fbsdx.com',
        'firebasestorage.googleapis.com',
        'scontent-waw1-1.xx.fbcdn.net'
    ]
  }
}

module.exports = nextConfig
