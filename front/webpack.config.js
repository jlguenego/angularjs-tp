const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  console.log('mode', argv.mode); // outputs development
  return {
    entry: ['./src/main.ts', './src/styles.scss'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
    },
    devtool: argv.mode === 'development' ? 'inline-source-map' : 'none',
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new CleanWebpackPlugin(),
      new webpack.DefinePlugin({
        PRODUCTION: argv.mode === 'production',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[hash].css',
        ignoreOrder: false,
      }),
      new CopyWebpackPlugin([{ from: './src/assets', to: 'assets' }]),
    ],
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            attrs: false,
            minimize: true,
          },
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            // fallback to style-loader in development
            argv.mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: {
                sourceMap: argv.mode === 'development',
              },
            },
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: {
                sourceMap: argv.mode === 'development',
                // Prefer `dart-sass`
                implementation: require('sass'),
              },
            },
          ],
        },
      ],
    },
    devServer: {
      stats: {
        children: false, // Hide children information
        maxModules: 0, // Set the maximum number of modules to be shown
      },
      port: 3111,
    },
  };
};
