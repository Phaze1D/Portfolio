var path = require('path');
var webpack = require("webpack");

const INDEX_HTML = path.join(__dirname, "src", "index.html");
const INDEX_JS = path.join(__dirname, "src/app", "index.js");
const INDEX_SCSS = ["sass-loader", "style-loader", "css-loader", path.join(__dirname, "src/scss", "index.scss")]


module.exports = {
  watch: false,
  entry: [
    INDEX_JS,
    INDEX_SCSS.join('!')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/'
  },
  module: {
    rules: [
      {
        test: INDEX_HTML,
        loaders: [
          "file-loader?name=[name].[ext]",
          "extract-loader",
          "html-loader?" + JSON.stringify({
            attrs: ["img:src"]
          })
        ]
      },
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
