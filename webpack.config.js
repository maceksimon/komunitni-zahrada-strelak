const path = require("path");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader");
const Dotenv = require("dotenv-webpack");

// default config
const config = {
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/js/script.js"),
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm-bundler.js",
    },
    extensions: ["*", ".js", ".vue"],
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "script.js",
    clean: true,
  },
  plugins: [new VueLoaderPlugin(), new Dotenv()],
};

// https://stackoverflow.com/questions/66189561/you-are-running-the-esm-bundler-build-of-vue-it-is-recommended-to-configure-you
// conditional settings based on mode
module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.plugins.push(
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: true,
      })
    );
  }

  if (argv.mode === "production") {
    config.plugins.push(
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
      })
    );
  }

  return config;
};
