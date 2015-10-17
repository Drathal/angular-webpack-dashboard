module.exports = /*@ngInject*/ function (languageService) {

    this.languages = languageService.getLanguages();

    this.currentLanguage = function () {
        return languageService.getCurrentLanguage();
    };

    this.openLanguageMenu = function ($mdOpenMenu, event) {
        $mdOpenMenu(event);
    };

    this.changeLanguage = function (lang) {
        languageService.setCurrentLanguage(lang);
    };

};
