'use strict';

var webpack = require('webpack');

var config = function () {
    var entry = {
        app: './app/app.js'
    };

    var output = {
        path: './app/build',
        filename: 'bundle.js'
    };

    var module = {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw'
            }

        ]
    };

    var devServer = {
        contentBase: './app',
        stats: {
            colors: true,
            modules: false,
            cached: false,
            chunk: false
        }
    };

    return {
        devServer: devServer,
        entry: entry,
        output: output,
        module: module
    };
};


module.exports = config();
