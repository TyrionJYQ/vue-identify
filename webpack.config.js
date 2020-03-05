const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'v-captura.js',
    path: path.resolve(__dirname, './dist'),
    library: 'v-captura',
    libraryTarget: 'umd'
  },
  externals:{
    'vue': 'vue',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    },

    {
      test: /\.vue$/,
      use: ['vue-loader']
    }]
  },
  resolve: {
    alias: {
      vue: './node_modules/vue/dist/vue.esm'
    },
    extensions: ['.js', '.vue']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 8181,
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    }),
  ]
}