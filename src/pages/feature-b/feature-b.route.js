module.exports = /*@ngInject*/ function($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title': {
                template: '<span translate>' + gettext('Feature B') + '</span>'
            },
            '': {
                template: '<div class="md-whiteframe-z1 white" layout-margin><feature-b></feature-b></div>'
            }
        }
    });

};
