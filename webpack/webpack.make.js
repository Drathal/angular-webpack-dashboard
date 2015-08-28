var path = require('path');
var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcDir = path.join(__dirname, '../src');
var buildDir = path.join(__dirname, '../build');

module.exports = function makeWebpackConfig(options) {

    var BUILD = !!options.BUILD;

    var config = {};

    config.context = srcDir;

    config.entry = {
        app: './app.js'
    };

    config.output = {
        path: buildDir,
        publicPath: BUILD ? '/' : 'http://localhost:8080/',
        filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js'
    };

    if (BUILD) {
        config.devtool = 'source-map';
    } else {
        config.devtool = 'eval';
    }

    config.module = {
        preLoaders: [],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['ng-annotate'],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&verbose=true'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|ico)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.json(\?.*)?$/,
                loader: 'json'
            }
        ]
    };

    var scssLoader = {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss!sass')
    };
    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];


    config.module.loaders.push(scssLoader);

    //noinspection JSUnresolvedFunction
    config.plugins = [
        new ExtractTextPlugin('[name].[hash].css', {
            disable: !BUILD,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash'
        })
    ];

    config.plugins.push(
        new HtmlWebpackPlugin({
            title: 'Webpack Angular',
            template: './src/index.html',
            hash: true,
            inject: 'body',
            favicon: './src/assets/image/favicon.ico',
            minify: BUILD
        })
    );

    if (BUILD) {

        config.entry.vendor = [
            'jquery',
            'lodash',
            'angular',
            'angular-material',
            'angular-animate',
            'angular-aria',
            'angular-sanitize',
            'angular-translate',
            'angular-translate-storage-cookie',
            'angular-translate-storage-local',
            'angular-ui-router',
            'angular-cookies',
            'angular-local-storage'
        ];

        //noinspection JSUnresolvedFunction
        config.plugins.push(
            new Clean(['../build']),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.[hash].js'}),
            new webpack.optimize.MinChunkSizePlugin({minChunkSize: 1000}),
            new webpack.optimize.OccurenceOrderPlugin(true),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
        );
    }

    config.devServer = {
        contentBase: buildDir,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        }
    };

    config.node = {
        __dirname: true
    };

    return config;
};
