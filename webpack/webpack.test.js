var path = require('path');

module.exports = function () {

    return {

        cache: {},

        devtool: 'inline-source-map',

        node: {__dirname: true},

        module: {

            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: [/tepDefinitions\.js/, /node_modules/, /\.spec\.js$/, /bundle\.js/],
                    loaders: ['isparta-instrumenter-loader', 'jshint-loader', 'jscs-loader']
                }
            ],

            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel'],
                    exclude: [/node_modules/]
                },
                {test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'null'},
                {test: /\.(scss|css)$/, loader: 'null'},
                {test: /\.json(\?.*)?$/, loader: 'null'},
                {test: /\.html$/, loader: 'raw'}
            ]
        },

        resolve: {
            root: __dirname + '/src',
            modulesDirectories: ['node_modules'],

            alias: {
                angular: path.join(__dirname, '../node_modules/angular/index.js')
            }
        }

    };
};
