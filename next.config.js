const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'tools/styles/base')],
    prependData: '@import "resources.scss";',
  },
};

module.exports = nextConfig;
