'use strict';

var webpack = require('webpack');

var config = function () {
    var entry = {
        app: './app/app.ts'
    };

    var output = {
        path: './app/build',
        filename: 'bundle.js'
    };

    var module = {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.html$/, exclude: /node_modules/, loader: 'raw' },
            {test: /\.scss$/, loader: 'style!css!postcss!sass'},
            {test: /\.ts$/, loader: 'ts-loader'}
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

    var plugins = [
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })*/
    ];


    return {
        devServer: devServer,
        entry: entry,
        output: output,
        module: module,
        plugins: plugins
    };
};


module.exports = config();
