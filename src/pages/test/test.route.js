module.exports.config = /*@ngInject*/ function ($stateProvider) {

    $stateProvider.state('app.layout-full.test', {
        url: '/test',
        views: {
            '': {
                controller: function ($scope, data) {
                    this.data = data;
                },
                controllerAs: 'test',
                template: '<test data="test.data" class="layout-fill" layout="column" layout-align="center center"></test>',
                resolve: {

                    data: function ($q, Gists) {
                        return $q.all([Gists.query().$promise]);
                    }

                }
            }
        }
    });

};
