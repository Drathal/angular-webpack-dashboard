module.exports.config = /*@ngInject*/ function ($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-c', {
        url: '/feature-c',
        views: {
            'toolbar-title': {
                template: gettext('Feature C')
            },
            '': {
                controller: function ($scope, data) {
                    this.data = data;
                },

                controllerAs: 'featureCState',
                template: require('./feature-c.page.html'),
                resolve: {
                    data: function () {
                        return {sample: 'here we resolve Other Data !'};
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService, gettext) {

    menuService.addMenu({
        name: gettext('Feature C'),
        icon: 'dashboard',
        state: 'app.layout-sidebar.feature-c',
        type: 'link'
    });

};
