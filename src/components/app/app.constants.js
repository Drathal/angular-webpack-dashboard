module.exports.name = 'APPCONFIG';
module.exports.value = (function () {

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
