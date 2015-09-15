module.exports = /* @ngInject */ function ($stateProvider) {

    $stateProvider
        .state('app.layout-full', {
            abstract: true,
            views: {
                'layout@': {
                    template: '<layout-full class="layout layout-fill"></layout-full>'
                }
            }
        });

};
