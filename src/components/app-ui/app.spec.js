var Controller = require('./app.ctrl');

describe('app', function () {
    describe('controller', function () {

        var $translate;
        var $scope;
        var $mdSidenav;

        before(function () {
            $translate = function (translations) {

                var translate = {};
                translate[translations[0]] = 'test_translation';

                return {
                    then: function (callback) {
                        callback(translate);
                    }
                };
            };

            $mdSidenav = function (where) {
                return {
                    toggle: function () {
                        $scope.toggleCalled = true;
                        $scope.toggleWhere = where;
                    }
                };
            };

            $scope = new Controller($translate, $mdSidenav);
        });

        it('should have a mini logo', function () {
            expect($scope.miniLogoUrl).to.be.a('string');
        });

        it('should translate the title', function () {
            expect($scope.title).to.equal('test_translation');
        });

        it('should have a toggleSidebar function', function () {
            expect($scope.toggleSidebar).to.be.a('function');
        });

        it('should toggle the sidebar', function () {
            $scope.toggleSidebar();
            expect($scope.toggleCalled).to.equal(true);
            expect($scope.toggleWhere).to.be.a('string');
        });

    });
});
