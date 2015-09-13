module.exports = /* @ngInject */ function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('app.layout-full', {
            abstract: true,

            views: {
                'layout@': {
                    controller: function ($scope, data) {
                        this.data = data;
                    },
                    controllerAs: 'layoutFull',
                    template: '<layout-full class="layout layout-fill"></layout-full>',
                    resolve: {
                        data: function () {
                            return {sample: '2'};
                        }
                    }
                }
            }
        });

};
