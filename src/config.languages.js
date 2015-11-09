module.exports = (function () {

    /* fake gettext function - translation will be done in $scope / controller */
    var gettext = function(text) { return text; };

    /* todo: read available languages at build time */
    return {
        languages: [
            {
                name: gettext('English'),
                key: 'en',
                icon: 'gb'
            }, {
                name: gettext('German'),
                key: 'de'
            }
        ]
    };

})();
