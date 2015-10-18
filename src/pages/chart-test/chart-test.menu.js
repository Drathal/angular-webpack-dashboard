module.exports = /* @ngInject */ function (menuService, gettext) {

    menuService.addMenu({
        name: gettext('Charts'),
        icon: 'equalizer',
        state: 'app.layout-sidebar.charttest',
        type: 'link'
    });

};
