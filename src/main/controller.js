module.exports.name = 'app';

module.exports.controller = /* @ngInject */ function ($translate) {

    this.miniLogoUrl = require('../assets/image/mini-logo.png');

    this.title = 'title';

    this.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

};
