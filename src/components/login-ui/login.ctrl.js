module.exports = /*@ngInject*/ function ($scope, $mdMedia) {

    $scope.$watch(() => {
        return $mdMedia('gt-sm');
    }, (size) => {
        $scope.gtSm = size;
    });

};
