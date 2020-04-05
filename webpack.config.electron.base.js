const webpack = require("webpack");
const baseConfig = require("./webpack.config.app.base");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

const plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      HOT: JSON.stringify(process.env.HOT)
    }
  })
];

module.exports = {
  ...baseConfig,
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx|js)?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },

  plugins,

  devtool: "source-map",
  entry: "src/appWindow/index.development",

  output: {
    ...baseConfig.output,
    path: __dirname,
    filename: "src/appWindow/index.js"
  },

  resolve: {
    modules: [path.join(__dirname, "appWindow"), "node_modules"],
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      Environment: path.resolve(__dirname, `src/environment/development`),
      "@app": path.resolve(__dirname, `src/app/`),
      "@appWindow": path.resolve(__dirname, `src/appWindow/`),
    }
  },

  target: "electron-main",

  node: {
    __dirname: false,
    __filename: false
  }
};
