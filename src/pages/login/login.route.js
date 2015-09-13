module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add(__dirname);

    $stateProvider.state('app.layout-full.login', {
        url: '/login',
        views: {
            '': {
                template: '<login layout-fill layout="column" layout-align="center center"></login>'
            }
        }
    });

};
