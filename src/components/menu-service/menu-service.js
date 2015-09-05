var angular = require('angular');

module.exports.name = 'menuService';

module.exports.component = /*@ngInject*/ function($rootScope, $document) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
        angular.element($document[0].body).addClass('page-' + toState['name'].replace(/\./g, '-'));
        angular.element($document[0].body).removeClass('page-' + fromState['name'].replace(/\./g, '-'));
    });

    var menu = [];
    var traverse = function(object, callback, depth) {
        depth = depth === undefined ? false : depth;

        if (object instanceof Array) {
            depth++;
            for (var i = 0; i < object.length; i++) {
                traverse(object[i], callback, depth);
            }
        } else {
            callback(object, depth);
            if (object.children !== undefined) {
                traverse(object.children, callback, depth);
            }
        }
    };

    var service = {
        addMenu: function(item) {
            menu.push(item);
        },

        getMenu: function() {
            return menu;
        },

        traverseMenu: function(callback) {
            traverse(menu, callback);
        }
    };

    return service;

};
