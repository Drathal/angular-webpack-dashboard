module.exports.name = 'app';

module.exports.controller = /* @ngInject */ function ($translate, $mdSidenav, $mdDialog) {

    var self = this;
    this.miniLogoUrl = require('../assets/image/mini-logo.png');

    $translate(['APP.SIDEBAR_TITLE']).then(function (translations) {
        self.title = translations['APP.SIDEBAR_TITLE'];
    });

    this.openLanguageMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    this.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

    this.toggleSidebar = function () {
        $mdSidenav('left').toggle();
    };

};
