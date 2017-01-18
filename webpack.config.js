var path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug: true,
    devtool: "cheap-eval-source-map",
    entry: {
        app: path.join(__dirname, './app/index.js'),
        vendor: ['react', 'react-dom', 'react-router'],
    },
    output: {
        path: path.join(__dirname, 'public/'),
        filename: '[name].[hash].js'
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
            template: path.join(__dirname, './public/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
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