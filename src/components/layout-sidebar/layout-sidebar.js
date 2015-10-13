class LayoutSidebar {

    /*@ngInject*/
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = require('./layout-sidebar.html');
        this.controllerAs = 'layoutSidebar';
    }

    controller($rootScope, $mdSidenav) {

        'ngInject';

        this.title = 'APP.SIDEBAR_TITLE';

        $rootScope.$on('$locationChangeSuccess', () => {
            $mdSidenav('left').close();
        });

        this.toggleSidebar = () => {
            $mdSidenav('left').toggle();
        };

    }

    static directive() {
        'ngInject';
        return LayoutSidebar.instance = new LayoutSidebar();
    }

}

export { LayoutSidebar };
