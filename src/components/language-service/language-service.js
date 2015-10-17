var angular = require('angular');

module.exports.component = /*@ngInject*/ function (gettextCatalog, APPCONFIG, localStorageService, $window) {

    var storageProperty = 'dashboardLang';

    var service =  {
        init: function() {
            var langIso;
            var userLang = service.getBrowserLanguage();

            service.getTranslations();

            for (var i = 0; i < APPCONFIG.languages.length; i++) {
                langIso = APPCONFIG.languages[i].key;
                if (langIso == userLang && !localStorageService.get(storageProperty)) {
                    gettextCatalog.setCurrentLanguage(userLang);
                }
            }

            if (!localStorageService.get(storageProperty)) {
                localStorageService.set(storageProperty, gettextCatalog.getCurrentLanguage());
            }

            gettextCatalog.setCurrentLanguage(localStorageService.get(storageProperty));
        },
        getLanguages: function() {
            return APPCONFIG.languages;
        },
        getBrowserLanguage: function () {
            return $window.navigator.language || $window.navigator.userLanguage;
        },
        getTranslations: function () {
            var langIso;
            for (var i = 0; i < APPCONFIG.languages.length; i++) {
                langIso = APPCONFIG.languages[i].key;
                gettextCatalog.setStrings(langIso, require('../../translation/' + langIso + '.po')[langIso]);
            }
        },
        setCurrentLanguage: function (langKey) {
            localStorageService.set(storageProperty, langKey);
            gettextCatalog.setCurrentLanguage(langKey);
        },
        getCurrentLanguage: function () {
            return gettextCatalog.getCurrentLanguage();
        },
        markMissingTranslations: function (mark) {
            gettextCatalog.debug = !!mark;
        }
    };

    return service;

};
