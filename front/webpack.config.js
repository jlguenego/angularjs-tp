const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  };
};
