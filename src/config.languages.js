module.exports = (function () {

    /* fake gettext function - translation will be done in $scope / contoller */
    var gettext = function(text) { return text; };

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
