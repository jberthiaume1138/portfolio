var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

var path = require('path');

module.exports = {
  context: path.join(__dirname, "/src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: path.join(__dirname, "/src/js/client.js"),
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }
    ]
  },
  output: {
    path: path.join(__dirname, "/public/dist/js"),
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
