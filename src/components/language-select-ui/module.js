module.exports.name = 'uiLanguageSelect';

module.exports.component = /*@ngInject*/ function() {
    return {
        controller: MenuController,
        controllerAs: 'ctrl',
        bindToController: true,
        template: require('./template.html')
    };
};

var MenuController = /*@ngInject*/ function($translate, $mdDialog) {

    this.openLanguageMenu = function($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };

    this.changeLanguage = function (langKey) {
        $translate.use(langKey);
    };

};
