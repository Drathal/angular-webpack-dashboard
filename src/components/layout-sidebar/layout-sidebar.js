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
        return new LayoutSidebar();
    }

}

export { LayoutSidebar };
