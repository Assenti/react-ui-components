const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:  "./es/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/react-ui-components.min.js"
  },
  resolve: {
    extensions: [".js"]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
              loader: "css-loader"
          },
          {
              loader: "sass-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/react-ui-components.min.css",
      chunkFilename: "[id].css"
   })
  ]
}