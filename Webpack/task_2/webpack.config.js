const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/, // regex to tell Webpack what files to transform
        use: [
          'style-loader', // injects CSS to the DOM by injecting a <style> tag
          'css-loader', // interprets @import and url() like import/require() & will resolve them
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            // options: {
            // mozjpeg: { // Compress JPEG images
            //   enabled: false,
            //   progressive: true,
            //   quality: 75, // Adjust quality between 0 and 100
            // },
            // optipng: { // Compress PNG images (better than pngquant for quality)
            //   enabled: true,
            //   optimizationLevel: 7, // Optimization level between 0 & 7
            // },
            // pngquant: { // Compress PNG images
            //   enabled: false,
            //   quality: [0.65, 0.90], // Range of quality
            //   speed: 4, // Speed/quality trade-off (1=slow, 11=fast)
            // },
            // gifsicle: { // Compress GIF images
            //   enabled: false,
            //   interlaced: false,
            // },
            // webp: { // Compress to WebP format
            //   enabled: false,
            //   quality: 75,
            // },
            // },
          },
        ],
      },
    ],
  },
};
