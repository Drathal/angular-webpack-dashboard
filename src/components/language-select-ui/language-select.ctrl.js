module.exports = /*@ngInject*/ function($translate) {

    this.openLanguageMenu = function($mdOpenMenu, event) {
        $mdOpenMenu(event);
    };

    this.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

};
