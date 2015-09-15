import template from './layout-sidebar.html';

export default class LayoutSidebar {

    /* @ngInject */
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = template;
        this.controllerAs = 'layoutSidebar';
    }

    /* @ngInject */
    controller($rootScope, $translate, $mdSidenav) {

        this.miniLogoUrl = require('../../assets/image/mini-logo.png');

        $translate(['APP.SIDEBAR_TITLE']).then((translations) => {
            this.title = translations['APP.SIDEBAR_TITLE'];
        });

        $rootScope.$on('$locationChangeSuccess', function() {
            $mdSidenav('left').close();
        });

        this.toggleSidebar = function () {
            $mdSidenav('left').toggle();
        };

    }

    static directive() {
        return LayoutSidebar.instance = new LayoutSidebar();
    }

}
