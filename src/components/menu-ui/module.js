module.exports.name = 'uiStateMenu';

module.exports.component = /*@ngInject*/ function() {
    return {
        controller: MenuController,
        controllerAs: 'ctrl',
        link: Link,
        bindToController: true,
        template: require('./template.html')
    };
};

var MenuController = /*@ngInject*/ function(menuService) {
    this.menuItems = menuService.getMenu();
};

var Link = /*@ngInject*/ function() {

};
