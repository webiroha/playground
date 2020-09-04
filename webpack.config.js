const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname + '/docs',
    filename: 'bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),,
    new CopyWebpackPlugin([
      {
        from: './src/assets/images',
        to: 'assets/images',
      },
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].css',
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: [/.css$|.scss$/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          MiniCssExtractPlugin.loader,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
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
