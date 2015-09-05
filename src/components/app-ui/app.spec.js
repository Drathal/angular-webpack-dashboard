describe('app', function () {
    describe('controller', function () {

        var Controller = require('./app.ctrl');
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

    describe('directive', function () {

        var element;
        var $scope;

        beforeEach(angular.mock.module(require('./index.js')));
        beforeEach(inject(function ($rootScope, $compile) {
            element = angular.element('<app></app>');
            $scope = $rootScope;
            $compile(element)($scope);
            $scope.$digest();
        }));

        it('should render the app directive', function () {
            expect($(element).find('md-sidenav.md-sidenav-left').length).to.equal(1);
            expect($(element).find('div[role="main"]').length).to.equal(1);
        });

    });

});
