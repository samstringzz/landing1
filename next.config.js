const path = require("path");

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Remove any existing CSS rules
    config.module.rules = config.module.rules.filter(
      (rule) => !(rule.test && rule.test.test('.css'))
    );

    // Add our own CSS rules
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'next/dist/compiled/css-loader',
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['postcss-preset-env'],
            },
          },
        },
      ],
    });

    config.resolve.fallback = { fs: false };
    return config;
  }
};
