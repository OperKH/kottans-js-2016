var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');

var postcssImport = require('postcss-import');
var postcssUrl =  require("postcss-url");
var nested = require('postcss-nested');
var cssnext = require('postcss-cssnext');

var autoprefixer = require('autoprefixer');
var csswring = require("csswring")

var postCSSConfig = function(webpack) {
    return [
        postcssImport({ addDependencyTo: webpack }),
        postcssUrl,
        nested,
        cssnext,
        autoprefixer({ browsers: ['last 3 versions'] })
    ];
};

module.exports = {
    entry: {
        vendor: ['./src/js/vendor.js'],
        app: ['./src/js/app.js', './index.html']
    },
    output: {
        path: require('path').resolve('dist'),
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css!postcss'),
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2017']
                }
            },
            {
                test: /\.(woff2?|ttf|eot|svg)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?name=css/fonts/[name].[ext]&limit=10000'
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url?name=images/[name].[ext]&limit=1'
            }
        ]
    },
    postcss: postCSSConfig,
    plugins: [
        new ExtractTextPlugin('css/[name].css', { allChunks: true }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(['dist'], {
            dry: false
        })
    ]
};
