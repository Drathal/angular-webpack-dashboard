module.exports = /* @ngInject */ function ($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-a', {
        url: '/feature-a',
        views: {
            'toolbar-title': {
                /// Toolbar Title
                template: '<span translate>' + gettext('Feature A') + '</span>'
            },
            '': {
                controller: /* @ngInject */ function (data) {
                    this.data = data;
                },
                controllerAs: 'featureAState',
                template: '<div class="md-whiteframe-z1 white layout-margin"><feature-a data="featureAState.data"></feature-a></div>',
                resolve: {
                    data: function () {
                        return {sample: 'sample resolved Data'};
                    }
                }
            }
        }
    });

};
