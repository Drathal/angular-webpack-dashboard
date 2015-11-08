module.exports = /*@ngInject*/ function($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title': {
                template: '<span translate>' + gettext('Feature B') + '</span>'
            },
            '': {
                template: '<feature-b class="md-whiteframe-z1 white"></feature-b>'
            }
        }
    });

};
