module.exports.name = 'uiUserInfo';

module.exports.component = /*@ngInject*/ function() {
    return {
        scope: {},
        controller: UserInfoController,
        controllerAs: 'userInfoController',
        bindToController: true,
        template: require('./template.html')
    };
};

var UserInfoController = function() {
    this.name = 'Peter, Parker';
};
