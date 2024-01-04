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
        type: 'asset/resource',
      },
    ],
  },
};
