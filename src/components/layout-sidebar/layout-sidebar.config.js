module.exports = /* @ngInject */ function ($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('app.layout-sidebar', {
            abstract: true,

            views: {
                'layout@': {
                    template: '<layout-sidebar class="layout layout-fill"></layout-sidebar>'
                }
            }

        });

};
