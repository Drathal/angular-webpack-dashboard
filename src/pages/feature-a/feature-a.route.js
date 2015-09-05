module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add(__dirname);

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
                template: '<div class="md-whiteframe-z1 white" layout-margin ><feature-a data="featureAState.data"></feature-a></div>',
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
        icon: 'home',
        state: 'app.feature-a',
        type: 'link'
    });

};
