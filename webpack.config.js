var path = require('path');
var webpack = require('webpack');

var plugins = [];


module.exports = {
    debug: true,
    devtool: "cheap-eval-source-map",
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, 'public/'),
        filename: 'bundle.js'
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
    plugins: plugins,
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