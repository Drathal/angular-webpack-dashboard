module.exports = /*@ngInject*/ function(gettextCatalog, APPCONFIG, localStorageService) {

    this.languages = APPCONFIG.languages;

    this.openLanguageMenu = function($mdOpenMenu, event) {
        $mdOpenMenu(event);
    };

    this.changeLanguage = function (langKey) {
        gettextCatalog.setCurrentLanguage(langKey);
        localStorageService.set('dashboardLang', langKey);
    };

};
