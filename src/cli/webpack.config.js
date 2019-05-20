const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const CLI_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve(__dirname, 'build');
const SHARED_DIR = path.resolve(__dirname, '../shared');
const IS_DEV = true; //process.env.NODE_ENV == "development"; //process.env.MCCOY_DEV === "true";

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

    mode: 'development',

    entry: {
        getHistoricalPrices: CLI_DIR + '/scripts/getHistoricalPrices.ts',
        getLatestPrices: CLI_DIR + '/scripts/getLatestPrices.ts',
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
            cli: CLI_DIR,
            shared: SHARED_DIR
	    }
    },

    module: {
        rules: [
            { 
                test: /\.(t|j)s?$/, 
                include: [
                    CLI_DIR,
                    SHARED_DIR
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

    devtool: '#eval-source-map'

};

module.exports = config;