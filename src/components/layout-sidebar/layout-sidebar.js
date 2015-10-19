var template = require('./layout-sidebar.html');

class LayoutSidebar {

    /*@ngInject*/
    constructor() {
        this.restrict = 'AE';
        this.transclude = true;
        this.template = template;
        this.controllerAs = 'layoutSidebar';
    }

    controller($rootScope, $scope, $mdSidenav) {

        'ngInject';

        this.sidebarSmall = false;

        var unbindChangeSuccess = $rootScope.$on('$locationChangeSuccess', () => {
            $mdSidenav('left').close();
        });

        $scope.$on('$destroy', function () {
            unbindChangeSuccess();
        });

        this.toggleSidebar = () => {
            $mdSidenav('left').toggle();
        };

        this.toggleSidebarSize = () => {
            this.sidebarSmall = !this.sidebarSmall;
        };

    }

    static directive() {
        'ngInject';
        return new LayoutSidebar();
    }

}

export { LayoutSidebar };
