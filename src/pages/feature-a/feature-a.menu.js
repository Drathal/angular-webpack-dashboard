module.exports = /* @ngInject */ function (menuService, gettext) {

    menuService.addMenu({
        /// Menu Title
        name: gettext('Feature A'),
        icon: 'home',
        state: 'app.layout-sidebar.feature-a',
        type: 'link'
    });

};
