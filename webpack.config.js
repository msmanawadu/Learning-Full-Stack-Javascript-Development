const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  // React Front-end Environment variable configuration
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "0.0.0.0",
      PORT: "8080",
    }),
  ],
};
