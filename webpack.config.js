let path = require('path');

module.exports = {
  entry: path.join(__dirname, "public", "index.js"),
  output: {
    path: path.join(__dirname, "public", "build"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', ''],
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      }
    ]
  }
}
