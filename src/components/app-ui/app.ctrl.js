module.exports = /* @ngInject */ function ($translate, $mdSidenav) {

    var self = this;
    this.miniLogoUrl = require('../../assets/image/mini-logo.png');

    $translate(['APP.SIDEBAR_TITLE']).then(function (translations) {
        self.title = translations['APP.SIDEBAR_TITLE'];
    });

    this.toggleSidebar = function () {
        $mdSidenav('left').toggle();
    };

};
