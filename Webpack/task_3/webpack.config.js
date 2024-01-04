const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },

  output: {
    filename: '[name].bundle.js', // Creates separate bundles for each entry point
    path: path.resolve(__dirname, 'public'),
  },

  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    hot: true,
    port: 8564,
  },

  plugins: [
    new HtmlWebpackPlugin({ // creates index.html for you
      title: 'task_3',
    }),
    new CleanWebpackPlugin(), // cleans files in output.path (/public) before build
  ],

  devtool: 'inline-source-map', // shows you errors in source code instead of bundled file

  optimization: {
    splitChunks: {
      chunks: 'all', // tells webpack to apply splitting logic to all chunks, including async * non-async chunks
      cacheGroups: { // allows you to define groups of modules that should be bundled together
        vendors: { // I am creating a vendors cache group that targets modules in 'node_modules' (like jquery)
          test: /[\\/]node_modules[\\/]/, // identifies which modules should be included in this group - anything in node_modules
          name: 'vendors', // name of output chunk file
          chunks: 'all',
        }
      }
    }
  },

  mode: 'development',

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
          },
        ],
      },
    ],
  },
};
