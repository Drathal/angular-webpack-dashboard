module.exports = /*@ngInject*/ function(menuService, gettext) {

    menuService.addMenu({
        name: gettext('Feature B'),
        icon: 'adjust',
        state: 'app.layout-sidebar.feature-b',
        type: 'link'
    });

};
