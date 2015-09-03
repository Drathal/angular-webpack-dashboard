module.exports.config = /*@ngInject*/ function ($stateProvider, translationLoaderProvider) {

    translationLoaderProvider.add('charttest', __dirname);

    $stateProvider.state('app.charttest', {
        url: '/charttest',
        views: {
            'toolbar-title@': {
                template: '{{ "CHARTTEST.HEADING" | translate }}'
            },
            '@': {
                controller: function ($scope, data) {
                    this.data = data;
                },

                controllerAs: 'chartTestState',
                template: require('./chart-test.page.html'),
                resolve: {
                    data: function () {
                        return {sample: 1};
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService) {

    menuService.addMenu({
        name: 'CHARTTEST.HOME',
        icon: 'equalizer',
        state: 'app.charttest',
        type: 'link'
    });

};
