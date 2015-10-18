module.exports = /*@ngInject*/ function (menuService, gettext) {

    menuService.addMenu({
        name: gettext('Feature C'),
        icon: 'dashboard',
        state: 'app.layout-sidebar.feature-c',
        type: 'link'
    });

};
