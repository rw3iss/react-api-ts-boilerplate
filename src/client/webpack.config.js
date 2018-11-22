const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CLIENT_DIR = path.resolve(__dirname);
const BUILD_DIR = path.resolve(__dirname, 'build');
const SHARED_DIR = path.resolve(__dirname, '../shared');
const IS_DEV = true;
const DEV_PORT = 5000;
const API_DOMAIN = 'http://localhost:5001';

let appEntries = [];
appEntries.push(CLIENT_DIR + '/entry.tsx');


let config = {
    
    mode: IS_DEV ? 'development' : 'production',

    context: CLIENT_DIR,

    entry: {
        app: appEntries
    },

    output: {
        publicPath: '/',
        path: BUILD_DIR,
        filename: '[name].[hash].js',
        chunkFilename: 'hot-update.js',
        hotUpdateMainFilename: 'hot-update-chunk.json',
        hotUpdateChunkFilename: 'hot-update-chunk.js',
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
	    alias: {
          client: path.resolve(__dirname, "./")
        }
    },

    module: {
        rules: [
            { 
                test: /\.(t|j)sx?$/, 
                include: [
                    CLIENT_DIR
                ],
                exclude: [
                    /node_modules/
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            babelrc: false,
                            plugins: ['react-hot-loader/babel'],
                        },
                    },
                    { 
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        }
                    }
                ]
            },

            {
                test: /\.scss$/,
                include: [
                    CLIENT_DIR
                ],
                exclude: /node_modules/,

                use: [
                  IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                  //'postcss-loader',
                  'sass-loader',
                ]
            },

            {
                test: /\.(png|jpg|gif|svg|webp|ico|woff|woff2|eot|otf|ttf|css)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
              }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        }),
            
        // Clean previous client builds
        new CleanWebpackPlugin(['build/*'], {
            root:     path.resolve(__dirname),
            verbose:  true,
            allowExternal: true,
            watch: true
          }),

        // Clean api build dir (from client static assets that were copied previously)
/*         new CleanWebpackPlugin(['app.*.js', 'app.*.css', 'index.html'], { // using explicit files because this plugin's 'ignore' option isn't working
            root:     path.resolve(__dirname, '../api/build'), 
            verbose:  true,
            watch: true
        }), */

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.template.html',
        }),
        
        new webpack.HotModuleReplacementPlugin(),

        // add the plugin to your plugins array
        new webpack.DefinePlugin({ "process.env.API_DOMAIN": `"${API_DOMAIN}"` })

        //Copy built assets to api build so they can be served by the api statically
/*         new WebpackShellPlugin({
            onBuildEnd: 'node copy-build-to-api.js'
        }) */

    ],

    devServer: {
        hot: IS_DEV,
        contentBase: './build',
        publicPath: '/',
        public: `http://localhost:${DEV_PORT}`,
        port: DEV_PORT,
        watchContentBase: true,

        // Proxy api requests to the locally running API server (so cookies and such work with this devserver domain)
        proxy: [{
            context: ['/api', '/static'],
            target: `${API_DOMAIN}`
        }]
    },
};

module.exports = config;