var path = require('path');
var webpack = require("webpack");

module.exports = {
  watch: true,
  entry: './app/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src'),
    publicPath: 'src/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=public/[name].[ext]"
      }
    ]
  }
};
