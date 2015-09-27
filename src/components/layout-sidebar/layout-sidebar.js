export default class LayoutSidebar {

    constructor($rootScope, $translate, $mdSidenav) {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = require('./layout-sidebar.html');
        this.controllerAs = 'layoutSidebar';

        this.$mdSidenav = $mdSidenav;

        $translate(['APP.SIDEBAR_TITLE']).then((translations) => {
            this.title = translations['APP.SIDEBAR_TITLE'];
        });

        $rootScope.$on('$locationChangeSuccess', () => {
            this.$mdSidenav('left').close();
        });

    }

    toggleSidebar() {
        this.$mdSidenav('left').toggle();
    }

    static directive($rootScope, $translate, $mdSidenav) {
        return LayoutSidebar.instance = new LayoutSidebar($rootScope, $translate, $mdSidenav);
    }

}

LayoutSidebar.directive.$inject = ['$rootScope', '$translate', '$mdSidenav'];

export { LayoutSidebar };
