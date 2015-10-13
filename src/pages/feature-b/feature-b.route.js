module.exports.config = /*@ngInject*/ function($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-b', {
        url: '/feature-b',
        views: {
            'toolbar-title': {
                template: gettext('Feature B')
            },
            '': {
                template: '<div class="md-whiteframe-z1 white" layout-margin><feature-b></feature-b></div>'
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function(menuService, gettext) {

    menuService.addMenu({
        name: gettext('Feature B'),
        icon: 'adjust',
        state: 'app.layout-sidebar.feature-b',
        type: 'link'
    });

};
