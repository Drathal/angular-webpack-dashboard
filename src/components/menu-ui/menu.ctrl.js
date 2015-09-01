module.exports = /*@ngInject*/ function(menuService) {
    this.menuItems = menuService.getMenu();
};
