var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    devtool: "inline-source-map",
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
            path.join(__dirname, './app/index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router'],
    },
    output: {
        path: path.join(__dirname, 'public/'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.less/,
                exclude: /node_modules/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.svg$/,
                loader: 'babel!react-svg',
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: '[name].[hash].js'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, './app/index.html'),
            filename: 'index.html',
            inject: 'body'
        }),

        new webpack.HotModuleReplacementPlugin(),
    ],
    // proxy
    devServer: {
        proxy: {
            "/api/*": {
                target: "http://localhost:3001",
                secure: false
            }
        }
    }
}