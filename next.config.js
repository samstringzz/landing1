const path = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  }
};
