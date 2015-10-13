module.exports.config = /*@ngInject*/ function ($stateProvider, gettext) {

    $stateProvider.state('app.layout-sidebar.feature-a', {
        url: '/feature-a',
        views: {
            'toolbar-title': {
                /// Toolbar Title
                template: gettext('Feature A')
            },
            '': {
                controller: function ($scope, data) {
                    this.data = data;
                },
                controllerAs: 'featureAState',
                template: '<div class="md-whiteframe-z1 white" layout-margin ><feature-a data="featureAState.data"></feature-a></div>',
                resolve: {
                    data: function () {
                        return {sample: 'sample resolved Data'};
                    }
                }
            }
        }
    });

};

module.exports.run = /*@ngInject*/ function (menuService, gettext) {

    menuService.addMenu({
        /// Menu Title
        name: gettext('Feature A'),
        icon: 'home',
        state: 'app.layout-sidebar.feature-a',
        type: 'link'
    });

};
