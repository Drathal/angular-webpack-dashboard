module.exports.name = 'uiUserInfo';

module.exports.component = /*@ngInject*/ function() {
    return {
        scope: {},
        controller: UserInfoController,
        controllerAs: 'userInfoController',
        bindToController: true,
        template: '<span style="color: #0088cc;">{{ "APP.GREETING" | translate:userInfoController }}</span>'
    };
};

var UserInfoController = function() {
    this.name = 'Peter, Parker';
};
