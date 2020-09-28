const path = require('path');
const TerserWeppackPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'cms-data': './src/cms-data.js',
    breadcrumbs: './src/breadcrumbs.js',
    bundle: ['./src/cms-data.js', './src/breadcrumbs.js'],
  },

  mode: 'production',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../src/assets/web-components'),
  },
  optimization: {
    minimizer: [
      new TerserWeppackPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
