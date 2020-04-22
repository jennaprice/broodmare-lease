const path = require("path");

const SRC_DIR = path.join(__dirname, "/src/components");
const DIST_DIR = path.join(__dirname, "/public/dist");

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  devtool: "source-map",
  output: {
    filename: "bundle.js",
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
          query: {
              presets: ['@babel/preset-react', '@babel/env']
          }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["eslint-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  }
};
