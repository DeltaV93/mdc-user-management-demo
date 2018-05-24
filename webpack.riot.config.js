const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const isProduction = process.env.NODE_ENV === `production`
const isDevelopment = process.env.NODE_ENV === `development`

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: false,
      'import': false,
      minimize: isProduction,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: false,
      plugins: () => [require('autoprefixer')({grid: false})],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: false,
      includePaths: [path.resolve(__dirname,'./node_modules')],
    },
  },
];


const rules = [
  {
    test: /\.tag$/,
    loader: 'riot-tag-loader',
    options: {
      hot: true
    }
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [
      path.resolve(__dirname, 'riot'),
      path.resolve(__dirname, 'node_modules/')
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
    }
  }
]

const plugins = [

  // create index.html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'riot/index.html',
    // inject: 'body',
    minify: false,
    chunksSortMode: 'dependency'
  })

  // add riot dependencies
//   new WebpackCdnPlugin({
//     modules: [
//       {
//         name: 'riot',
//         var: 'riot',
//         path: isProduction ? 'dist/riot.runtime.min.js' : 'dist/riot.runtime.js'
//       },
//       {
//         name: 'riot-router',
//         var: 'riotRouter',
//         path: isProduction ? 'dist/riot-router.min.js' : 'dist/riot-router.js'
//       }
//     ],
//   }),
]

const config = {
  entry: {
    'riot': path.resolve(__dirname,'riot/main.js'),
  },
  output: {
    filename:  isProduction ? '[name].[chunkhash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[chunkhash].js' : '[name].js',
    path: path.resolve(__dirname, isProduction ? 'public/riot-mdc-adapter' : 'dev'),
  },
  resolve: {
    // alias: {
      // 'riot-mdc-adapter': path.resolve(__dirname,'components/index.js'),
      // 'riot': path.resolve(__dirname,'riot/')
    // }
  },
  externals: {},
  devtool: isProduction ? 'source-map' : 'cheap-eval-source-map',
  module: { rules },
  plugins
}

// Optimize for prod
if (isProduction) {

  config.mode = 'production'
  config.output.publicPath = '/riot-mdc-adapter/'

  // extract css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ExtractTextPlugin.extract({
      use: cssLoaders,
      fallback: 'style-loader'
    })
  })

  config.plugins.push(
    // clean output path
    new CleanWebpackPlugin(config.output.path),

    // split css
    new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true
    }),

    // copy assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: config.output.path,
        ignore: ['.*']
      }
    ]),

  );
}

// Enable dev server
if (isDevelopment) {

  config.mode = 'development'

  // laod css rule
  config.module.rules.push({
    test: /\.(css|scss)$/,
    use: ['style-loader'].concat(cssLoaders)
  })

  config.plugins.push(
    // HMR
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin()
  )

  config.devServer = {
    contentBase: path.resolve(__dirname, 'static'),
    disableHostCheck: true,
    hot: true,
    quiet: true
  }

  // cloud9 support
  process.env.IP && (config.devServer.host = process.env.IP)
  process.env.PORT && (config.devServer.port = process.env.PORT)

}

module.exports = config

