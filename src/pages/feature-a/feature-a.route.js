module.exports = /* @ngInject */ function ($stateProvider) {

    $stateProvider.state('app.layout-sidebar.feature-a', {
        url: '/feature-a',
        views: {
            'toolbar-title': {
                template: require('./feature-a-title.html')
            },
            '': {
                controller: /* @ngInject */ function (data) {
                    this.data = data;
                },
                controllerAs: 'featureAState',
                template: require('./feature-a.html'),
                resolve: {
                    data: function () {
                        return {sample: 'sample resolved Data'};
                    }
                }
            }
        }
    });

};
