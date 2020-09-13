const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    top: './src/app/index.js',
    class: './src/app/class/index.js',
    factory: './src/app/factory/index.js',
  },
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: 'style.[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'JavaScrip Playground',
      filename: 'index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['top'],
    }),
    new HtmlWebpackPlugin({
      title: 'JavaScrip Playground | class',
      filename: 'class/index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['class'],
    }),
    new HtmlWebpackPlugin({
      title: 'JavaScrip Playground | Factory',
      filename: 'factory/index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['factory'],
    }),
    // new CopyPlugin([
    //   {
    //     from: './src/assets/images',
    //     to: 'assets/images',
    //   },
    // ]),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  },
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
};
