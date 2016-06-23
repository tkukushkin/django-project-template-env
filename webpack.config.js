const webpack = require('webpack');

const BUILD = process.env.BUILD != undefined

var publicPath = '/static/';
var entry = [
  './assets/js/main.js'
];
var plugins = [];
if (!BUILD) {
  publicPath = 'http://localhost:8001' + publicPath;
  entry = [
    'webpack-dev-server/client?http://localhost:8001',
    'webpack/hot/only-dev-server',
  ].concat(entry);
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
}

module.exports = {
  entry: entry,
  output: {
    path: './project/project/static/',
    filename: 'js/script.js',
    publicPath: publicPath,
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader?{presets: ["react", "es2015", "stage-0"], cacheDirectory: ""}'
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader?name=images/[name].[hash].[ext]'
      },
      {
        test: /\.(eot|ttf|ijmap|woff|woff2|svg)$/,
        loader: 'file-loader?name=fonts/[name].[hash].[ext]'
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
  },
  devServer: {
    port: 8001,
    inline: true,
    hot: true
  },
  devtool: '#inline-source-map',
  plugins: plugins,
  postcss: function() {
    return [
      require('autoprefixer')
    ]
  }
}
