// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',  // Template for the main index.html
        filename: 'index.html', // Output file name
      }),
      new HtmlWebpackPlugin({
        template: './src/home.html',  // Template for home.html
        filename: 'home.html', // Output file name
      }),
      new HtmlWebpackPlugin({
        template: './src/menu.html',  // Template for menu.html
        filename: 'menu.html', // Output file name
      }),
      new HtmlWebpackPlugin({
        template: './src/contact.html',  // Template for contact.html
        filename: 'contact.html', // Output file name
      }),
  ],
};
