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
                {test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/]},
                {test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'url-loader'},
                {test: /\.(scss|css)$/, loader: 'null'},
                {test: /\.json(\?.*)?$/, loader: 'json'},
                {test: /\.html$/, loader: 'html'},
                {test: /\.po$/, loader: 'json!angular-gettext?format=json'}
            ]
        },

        resolve: {
            root: __dirname + '/src',
            modulesDirectories: [path.join(__dirname, '../', 'node_modules')],
            alias: {
                angular: path.join(__dirname, '../node_modules/angular/index.js')
            }
        }

    };
};
