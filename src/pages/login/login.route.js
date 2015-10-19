module.exports = /*@ngInject*/ function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('app.layout-full.login', {
        url: '/login',
        views: {
            '': {
                template: '<login class="layout layout-fill layout-column layout-align-center-center"></login>'
            }
        }
    });

};
