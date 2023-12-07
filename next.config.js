module.exports = {
  trailingSlash: true,
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5215/api/:path*',
      },
    ]
  },
};
