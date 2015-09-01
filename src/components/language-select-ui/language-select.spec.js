var LanguageSelectCtrl = require('./language-select.ctrl');

describe('components', function () {
    describe('user info', function () {

        var controller;
        var langKey;

        before(function () {
            var $translate = {
                use: function (key) {
                    langKey = key;
                    return key;
                }
            };
            controller = new LanguageSelectCtrl($translate);
        });

        it('should have a changeLanguage function', function () {
            expect(controller.changeLanguage).to.be.a('function');
        });

        it('should have a change the languae on changeLanguage call', function () {
            controller.changeLanguage('de');
            expect(langKey).to.equal('de');
            controller.changeLanguage('en');
            expect(langKey).to.equal('en');
        });

    });
});
