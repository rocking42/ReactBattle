# React Start

Starting a react project

### NPM setup
Install relevant packages
```
npm i --save react react-dom
npm i --save-dev html-webpack-plugin webpack webpack-dev-server babel-core babel-loader babel-preset-react babel-preset-es2015
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
