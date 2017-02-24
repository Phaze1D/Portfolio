var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractSass = new ExtractTextPlugin({
    filename: "[name].css",
});

var htmlPlugin = new HtmlWebpackPlugin({
});


const INDEX_JS = path.join(__dirname, "src/js", "index.js");


module.exports = {
  watch: true,
  entry: { 'index': INDEX_JS},
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
          use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'file-loader?name=[name].[ext]',
        }, {
          loader: 'extract-loader',
        }, {
          loader: 'html-loader?attrs=img:src source:srcset',
        }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader?name=public/[name].[ext]"
      }
    ]
  },
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  node: {
    fs: "empty"
  },
  plugins: [
    extractSass,
  ]
};
