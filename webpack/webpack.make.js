var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('../package.json');

var srcDir = path.join(__dirname, '../src');
var buildDir = path.join(__dirname, '../build');
var port = 8080;

module.exports = function makeWebpackConfig(options) {

    var BUILD = !!options.BUILD;

    var config = {};

    config.context = srcDir;

    config.cache = true;

    config.output = {
        path: buildDir,
        publicPath: BUILD ? '/' : 'http://localhost:' + port + '/',
        filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
        jsonpCallback: 'a'
    };

    if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }

    config.module = {
        noParse: [],
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'ng-annotate',
                    'babel',
                    'jshint-loader',
                    'jscs-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=10000',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&verbose=false'
                ]
            },
            {
                test: /\.(scss|css)$/,
                loader: BUILD ? ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss!sass') : 'style!css-loader?sourceMap!postcss!sass'
            },
            {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.json(\?.*)?$/,
                loader: 'json'
            },
            {
                test: /\.po$/,
                loader: 'json!angular-gettext?format=json'
            }
        ]
    };

    config.postcss = [
        autoprefixer({
            browsers: ['last 10 version']
        })
    ];

    config.resolve = {
        root: [
            path.join(__dirname, '../src'),
            path.join(__dirname, '../node_modules')
        ],
        extensions: [
            '',
            '.js',
            '.jsx',
            '.html',
            '.css',
            '.scss'
        ]
    };

    config.resolveLoader = {
        root: path.join(__dirname, '../node_modules')
    };

    //noinspection JSUnresolvedFunction
    config.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            angular: 'exports?window.angular!angular',
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        }),
        new HtmlWebpackPlugin({
            title: pkg.description,
            template: './src/index.html',
            hash: true,
            inject: 'body',
            favicon: './src/assets/image/favicon.ico'
        })
    ];

    config.entry = {
        app: './app.js'
    };

    if (BUILD) {

        config.entry.vendor = [
            'react',
            'react-dom',
            'jquery',
            'lodash',
            'd3',
            'nvd3',
            'angular',
            'angular-nvd3',
            'angular-material',
            'angular-messages',
            'angular-resource',
            'angular-animate',
            'angular-aria',
            'angular-sanitize',
            'angular-gettext',
            'angular-ui-router',
            'angular-cookies',
            'angular-local-storage',
            'angular-loading-bar'
        ];

        //noinspection JSUnresolvedFunction
        config.plugins.push(
            new Clean(['../build']),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.MinChunkSizePlugin({minChunkSize: 51200}),
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.[hash].js'}),
            new webpack.optimize.UglifyJsPlugin({mangle: true, compress: {warnings: false}})
        );
    }

    config.devServer = {
        contentBase: buildDir,
        stats: {
            modules: true,
            cached: true,
            colors: true,
            chunk: true
        }
    };

    config.node = {
        __dirname: true
    };

    return config;
};
