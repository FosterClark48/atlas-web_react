const path = require('path');

module.exports = {

  entry: './src/index.js',

  // Output bundle.js to dist folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '../dist'), // replaces contentBase
    },
    compress: true,
    hot: true,
  },

  devtool: 'inline-source-map',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // regex to target both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
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
          },
        ],
      },
    ],
  },
};
