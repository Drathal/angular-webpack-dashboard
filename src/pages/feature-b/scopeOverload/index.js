var angular = require('angular');

module.exports = angular
    .module('component.ui.scopeoverload', [])
    .directive('scopeOverload', function() {
        return {
            require: '^uiUserInfo',
            restrict: 'A',
            link: function($scope, $element, attrs, ctrl) {

                $scope.overload = ctrl;

                if (attrs['scopeOverload'].length > 0) {
                    angular.extend(ctrl, angular.fromJson(attrs['scopeOverload'].replace(/'/g, '"')));
                } else {
                    ctrl.name = 'Donald, Demo';
                }

            }
        };
    })
    .name;
