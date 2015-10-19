var LoginCtrl = require('./login.ctrl');

describe('component', function () {
    describe('login', function () {

        describe('controller', function () {
            var controller;
            var $scope;
            var _mediaInput;

            beforeEach(function () {
                angular.mock.inject(function ($rootScope) {

                    $scope = $rootScope.$new();
                    $scope.$watch = function(a,b){
                        a(1);
                        b(2);
                    };

                    var $mdMedia = function(mediaInput) {
                        _mediaInput = mediaInput;
                        return true;
                    };
                    controller = new LoginCtrl($scope, $mdMedia);
                });
            });

            it('should watch a media query', function() {
                expect(_mediaInput).to.be.a('string');
            });

            it('should change the scope when media query applied', function() {
                expect($scope.gtSm).to.equal(2);
            });

        });

        describe('directive', function () {

            var element;
            var $scope;

            beforeEach(function () {
                require('angular-gettext');
                angular.mock.module('gettext');
                angular.mock.module(require('angular-material'));
                angular.mock.module(require('./index.js'));
                angular.mock.inject(function ($rootScope, $compile) {
                    element = angular.element('<login></login>');
                    $scope = $rootScope;
                    $compile(element)($scope);
                    $scope.$digest();
                });
            });

            it('should render the login', function() {
                expect($(element).find('.login').length).to.equal(1);
            });

        });
    });
});
