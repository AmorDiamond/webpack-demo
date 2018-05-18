const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/lib/js/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  module: {
    rules: [
      /*{
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },*/
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},
      // { test: /\.png$/, loader: "file-loader?name=images/[hash:8].[name].[ext]" },
      { test: /jquery-mousewheel/, loader: "imports-loader?define=>false&this=>window" },
      { test: /malihu-custom-scrollbar-plugin/, loader: "imports-loader?define=>false&this=>window" }
    ],
    /*loaders: [
      { test: /jquery-mousewheel/, loader: "imports?define=>false&this=>window" },
      { test: /malihu-custom-scrollbar-plugin/, loader: "imports?define=>false&this=>window" }
    ]*/
  },
  resolve: {
    alias: {
      'jquery': __dirname + '/lib/js/jquery.min'
    }
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index-tmpl.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
}