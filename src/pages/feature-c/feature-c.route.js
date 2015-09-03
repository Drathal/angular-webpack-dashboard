module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featurec', __dirname);

    $stateProvider.state('app.feature-c', {
        url: '/feature-c',
        views: {
            'toolbar-title@': {
                template: '{{ "FEATUREC.HEADING" | translate }}'
            },
            '@': {
                controller: function ($scope, data) {
                    this.data = data;
                },

                controllerAs: 'featureCState',
                template: require('./feature-c.page.html'),
                resolve: {
                    data: function () {
                        return {sample: 'here we resolve Other Data !'};
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService) {

    menuService.addMenu({
        name: 'FEATUREC.HOME',
        icon: 'dashboard',
        state: 'app.feature-c',
        type: 'link'
    });

};
