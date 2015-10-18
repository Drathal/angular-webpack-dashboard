require('./chart-test.scss');

module.exports = /* @ngInject */ function ($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.charttest', {
        url: '/charttest',
        views: {
            'toolbar-title': {
                template: '<span translate>' + gettext('Chart Sample') + '</span>'
            },
            '': {
                template: require('./chart-test.page.html')
            }
        }
    });

};

