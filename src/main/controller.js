module.exports.name = 'app';

module.exports.controller = /* @ngInject */ function ($translate) {

    var self = this;
    this.miniLogoUrl = require('../assets/image/mini-logo.png');

    $translate(['APP.SIDEBAR_TITLE']).then(function (translations) {
        self.title = translations['APP.SIDEBAR_TITLE'];
    });

    this.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

};
