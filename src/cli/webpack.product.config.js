const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const BabelPlugin = require('babel-webpack-plugin');

const API_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve(__dirname, 'build');
const SHARED_DIR = path.resolve(__dirname, '../shared');
const IS_DEV = false; //process.env.NODE_ENV == "development"; //process.env.MCCOY_DEV === "true";

// This is used in 'externals' below to filter out external modules which mess up .ts parsing, or something...
var nodeModules = {};
fs.readdirSync('../node_modules')
.filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
});

var config = {

    mode: 'production',

    entry: {
        server: [
            API_DIR + '/server.ts'
        ] 
    },

    target: 'node',

    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: '[name].js'
    },

    resolve: {
        extensions: ['.js', '.ts'],
	    alias: {
            api: path.resolve(__dirname, "./")
	    }
    },

    module: {
        rules: [
            { 
                test: /\.(t|j)s?$/, 
                include: [
                    API_DIR
                ],
                exclude: /node_modules/,
                loader: ['ts-loader']
            }
        ],
        exprContextCritical: false // removes warning "Critical dependency: the request of a dependency is an expression"
    },

    node: {
        fs: 'empty',
        net: 'empty'
    },

    externals: nodeModules,

    devtool: '#eval-source-map',

    plugins: [
        // Trying this to render for crawler
        new BabelPlugin({
            test: /\.js$/,
            presets: [
            [
                'env',
                {
                exclude: [
                    'transform-regenerator'
                ],
                loose: true,
                modules: false,
                targets: {
                    browsers: [
                    '>1%'
                    ]
                },
                useBuiltIns: true
                }
            ]
            ],
        sourceMaps: false,
        compact: false
        })
    ]

};

module.exports = config;