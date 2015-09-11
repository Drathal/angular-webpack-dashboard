module.exports = function () {

    return {

        devtool: 'inline-source-map',

        node: {__dirname: true},

        module: {

            preLoaders: [
                {
                    test: /\.js$/,
                    exclude: [/tepDefinitions\.js/, /node_modules/, /\.spec\.js$/, /bundle\.js/],
                    loaders: ['istanbul-instrumenter-loader','jshint-loader','jscs-loader']
                }
            ],

            loaders: [
                {
                    test: /\.js$/,
                    loaders: ['babel'],
                    exclude: [/node_modules/]
                },
                {test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file'},
                {test: /\.(scss|css)$/, loader: 'css-loader!postcss!sass'},
                {test: /\.json(\?.*)?$/, loader: 'json'},
                {test: /\.html$/, loader: 'raw'}
            ]
        },

        resolve: {
            root: __dirname + '/src',
            modulesDirectories: ['node_modules']
        }

    };
};
