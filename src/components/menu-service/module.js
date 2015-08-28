var angular = require('angular');

module.exports.name = 'menuService';

module.exports.component = /*@ngInject*/ function($rootScope, $document) {

    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
        angular.element($document[0].body).addClass('page-' + toState['name'].replace(/\./g, '-'));
        angular.element($document[0].body).removeClass('page-' + fromState['name'].replace(/\./g, '-'));
    });

    var traverse = function(obj, callback, depth) {
        depth = depth === undefined ? -1 : depth;

        if (obj instanceof Array) {
            depth++;
            for (var i = 0; i < obj.length; i++) {
                traverse(obj[i], callback, depth);
            }
        } else {
            callback(obj, depth);
            if (obj.children !== undefined) {
                traverse(obj.children, callback, depth);
            }
        }
    };

    var menu = [];

    var service = {
        addMenu: function(item) {
            menu.push(item);
        },

        getMenu: function() {
            return menu;
        },

        traverseMenu: function(callback) {
            traverse(menu, callback);
        },

        getPath: function() {
            var path = [];
            service.traverseMenu(function(item) {
                if (item.active) {
                    path.push(item);
                }
            });

            return path;
        }
    };

    return service;

};
