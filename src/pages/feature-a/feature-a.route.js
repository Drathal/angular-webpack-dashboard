var template = require('./feature-a.html');

module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('featurea', __dirname);

    $stateProvider.state('app.feature-a', {
        url: '/feature-a',
        views: {
            'toolbar-title@': {
                template: '{{ "FEATUREA.HEADING" | translate }}'
            },
            '@': {
                controller: function ($scope, data) {
                    this.data = data;
                },

                controllerAs: 'featureAState',
                template: '<feature-a data="featureAState.data"></feature-a>',
                resolve: {
                    data: function () {
                        return {sample: 'sample resolved Data'};
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService) {

    menuService.addMenu({
        name: 'FEATUREA.HOME',
        icon: 'icon-home',
        state: 'app.feature-a',
        type: 'link',
        priority: 2.1
    });

};
