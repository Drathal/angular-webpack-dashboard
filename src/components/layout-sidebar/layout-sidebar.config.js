module.exports = /* @ngInject */ function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('app.layout-sidebar', {
            abstract: true,

            views: {
                'layout@': {
                    controller: function ($scope, data) {
                        this.data = data;
                    },
                    controllerAs: 'layoutSidebar',
                    template: '<layout-sidebar class="layout layout-fill"></layout-sidebar>',
                    resolve: {
                        data: function () {
                            return {sample: '1'};
                        }
                    }
                }
            }

        });

};
