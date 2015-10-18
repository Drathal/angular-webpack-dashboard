module.exports = /*@ngInject*/ function ($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-c', {
        url: '/feature-c',
        views: {
            'toolbar-title': {
                template: '<span translate>' + gettext('Feature C') + '</span>'
            },
            '': {
                controller: function (data) {
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
