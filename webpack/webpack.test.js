var path = require('path');

module.exports = function () {

    return {

        cache: {},

        devtool: 'inline-source-map',

        node: {__dirname: true},

        module: {

            noParse: /react\/dist\/react\.js/,

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
            ],
            alias: {
                react: path.join(__dirname, '../node_modules/react/dist/react.js'),
                'react-dom': path.join(__dirname, '../node_modules/react-dom/dist/react-dom.js'),
                jquery:  path.join(__dirname, '../node_modules/jquery/dist/jquery.js'),
                angular: path.join(__dirname, '../node_modules/angular/index.js')
            }
        }

    };
};
