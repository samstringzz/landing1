const path = require('path');

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Remove existing CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.toString().includes('.css'))
    );

    config.module.rules.push({
      test: /\.css$/i,
      issuer: { and: [/\.(js|ts|md)x?$/] },
      use: [
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: {
              auto: true,
              localIdentName: '[local]--[hash:base64:5]',
            },
          },
        },
      ],
    });

    // Handle Swiper CSS specifically
    config.module.rules.push({
      test: /swiper\.min\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
};
