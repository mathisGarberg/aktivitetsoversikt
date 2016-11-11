var webpack = require('webpack');

var config = require('./webpack.base.config');

config.devtool = 'inline-source-map';

config.entry = {
    index: [
        './app/client/index.js',
        'webpack-dev-server/client?http://0.0.0.0:3001',
        'webpack/hot/only-dev-server'
    ],
};

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"development"',
        },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
]);

config.devServer = {
    contentBase: 'http://localhost/',
    port: 3001,
    proxy: {
        '*' : 'http://127.0.0.1:3000',
    },
    hot: true,
    inline: true,
    historyApiFallback: false,
    colors: true,
    stats: 'normal',
    filename: 'bundle.js',
    publicPath: '/public/js',
};

module.exports = config;
