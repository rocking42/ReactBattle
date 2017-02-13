# React Start

Starting a react project

### NPM setup
Install relevant packages
```
npm i --save react react-dom
npm i --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015
```
### Fusebox setup (Awesome sauce)
```
npm i --save-dev fuse-box babel-preset-react babel-preset-latest

const fsbx = require("fuse-box");

// Create FuseBox Instance
let fuseBox = new fsbx.FuseBox({
    homeDir: "app/",
    sourceMap: {
        bundleReference: "sourcemaps.js.map",
        outFile: "./dist/sourcemaps.js.map",
    },
    outFile: "./dist/out.js",
    plugins: [
        fsbx.CSSPlugin(),
        fsbx.BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ["latest", "react"]
            }
        })
    ]
});

fuseBox.devServer(">index.js");
```
### Webpack setup

```
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
```
### Babel setup
Place any plugins and relevant extras
```
{
  "presets": [
    "react", "es2015"
  ]
}
```
