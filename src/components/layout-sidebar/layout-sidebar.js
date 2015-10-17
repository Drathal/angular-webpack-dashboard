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

        this.title = 'APP.SIDEBAR_TITLE';

        var unbindChangeSuccess = $rootScope.$on('$locationChangeSuccess', () => {
            $mdSidenav('left').close();
        });

        $scope.$on('$destroy', function () {
            unbindChangeSuccess();
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
