/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 21:37:28
 * @LastEditTime: 2021-07-11 14:25:25
 * @FilePath: /reactts/webpack.config.js
 * @Description: webpack config
 */
const { resolve } = require("path");
module.exports = {
  mode: "production",
  entry: "./src/decorator/index.ts",
  output: {
    path: resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "classic" }], // 通过preset-react 支持jsx
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
};
