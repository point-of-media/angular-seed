'use strict';

var webpack = require('webpack');

var config = function () {
    var entry = {
        app: './app/app.ts'
    };

    var resolve = {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json']
    };

    var output = {
        path: './app/build',
        filename: 'bundle.js'
    };

    var module = {
        preLoaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'tslint' }
        ],
        loaders: [
            {test: /\.html$/, exclude: /node_modules/, loader: 'raw' },
            {test: /\.scss$/, loader: 'style!css!postcss!sass'},
            {test: /\.ts$/, exclude: /node_modules/, loader: 'ng-annotate-loader!ts-loader'}
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        })
    ];

    var devtool = 'source-map';

    return {
        devServer: devServer,
        entry: entry,
        output: output,
        module: module,
        plugins: plugins,
        resolve: resolve,
        devtool: devtool
    };
};


module.exports = config();
