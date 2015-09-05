module.exports = function loadAsync(where, lang, n, deferred, callback) {
    require.ensure([], function () {
        require(['bundle!../../' + where + '/i18n/' + lang + '.json'], function (bundledResult) {
            bundledResult(function (result) {
                callback(result, lang, n, deferred);
            });
        });
    });
};
