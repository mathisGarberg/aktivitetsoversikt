var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/client/index.js',
    output: {
        path: path.resolve('./public/js'),
        filename: 'bundle.js',
        publicPath: '/public/js',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
            },
        }),
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loader: ['style', 'css', 'sass'],
            },
            {
                test: /\.vue$/,
                loader: 'vue',
            },
        ],
    },
    vue: {
        loaders: {
            js: 'babel',
        },
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
    },
};

