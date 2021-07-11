/*
 * @Author: 邱狮杰
 * @Date: 2021-07-10 21:37:28
 * @LastEditTime: 2021-07-11 17:14:38
 * @FilePath: /reactts/webpack.config.js
 * @Description: webpack config
 */
const { resolve } = require("path");
module.exports = {
  // mode: "production",
  // development
  mode: "production",
  entry: "./src/decorator/index.ts",
  output: {
    path: resolve(__dirname, "./dist"),
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        exclude: /node_modules/,
        use: {
          // loader: ["babel-loader", "ts-loader"],
          // options: {
          //   presets: [
          //     ["@babel/preset-env"],
          //     ["@babel/preset-react", { runtime: "classic" }], // 通过preset-react 支持jsx
          //     ["@babel/preset-typescript"],
          //   ],
          // },
          loader: "awesome-typescript-loader",
          options: {
            useBabel: true,
            babelCore: "@babel/core",
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
