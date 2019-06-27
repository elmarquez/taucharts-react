const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    clientLogLevel: 'debug',
    compress: true,
    contentBase: 'dist',
    port: 9000
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: { loader: "babel-loader" } },
      { test: /\.html$/, exclude: /node_modules/, use: [{loader: "html-loader"}] }
    ]
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html"
    })
  ]
};
