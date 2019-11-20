const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  console.log('mode', argv.mode); // outputs development
  return {
    entry: ['./src/main.ts'],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[hash].js',
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new CleanWebpackPlugin()],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  };
};
