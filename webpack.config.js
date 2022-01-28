const path = require('path');

module.exports =  {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devServer: {
    static : {
      directory: path.join(__dirname, "public")
    },
    // contentBase: path.join(__dirname, 'public')
  },
  mode: 'production'
}