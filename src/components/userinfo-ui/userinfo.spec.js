var UserInfoCtrl = require('./userinfo.ctrl');

describe('components', function () {
    describe('user info', function () {

        var controller;

        before(function () {
            controller = new UserInfoCtrl();
        });

        it('should have a default name', function () {
            expect(controller.name).to.be.a('string');
        });

    });
});
