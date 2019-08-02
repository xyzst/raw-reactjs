const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: "./src/index.js", // where the application starts and bundle files
  mode: "development", // can be changed with the mode flag
  module: { // see: https://webpack.js.org/configuration/module#module-rules
    rules: [
      {
        test: /\.(js|jsx)$/, // find all .js and .jsx files
        exclude: /(node_modules|bower_components)/, // match anything outside of node_modules and bower_components directories
        loader: "babel-loader",
        options: {presets: ["@babel/preset-env", "@babel/preset-react"]}
      },
      {
        test: /\.css$/, // for all css files, use style-loader and css-loader
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {extensions: ["*", ".js", ".jsx"]}, // which extensions should webpack resolve? (adds module import without the need to add extensions)
  output: { // where should the bundled code be placed?
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: { // webpack dev server configuration
    contentBase: path.join(__dirname, "public/"), // path where public files are served from
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()] // more plugins @ https://webpack.js.org/configuration/plugins/
};
