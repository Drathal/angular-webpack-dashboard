module.exports = /* @ngInject */ function ($stateProvider) {

    $stateProvider
        .state('app.layout-full', {
            abstract: true,
            views: {
                'layout@': {
                    template: '<layout-full></layout-full>'
                }
            }
        });

};
