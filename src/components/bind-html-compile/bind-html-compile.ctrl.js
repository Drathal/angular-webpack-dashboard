export default /*@ngInject*/  function bindHtmlCompile($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(
                () => {
                    return scope.$eval(attrs['bindHtmlCompile']);
                },
                (value) => {
                    let compileScope = scope;
                    element.html(value && value.toString());
                    if (attrs['bindHtmlScope']) {
                        compileScope = scope.$eval(attrs['bindHtmlScope']);
                    }
                    $compile(element.contents())(compileScope);
                }
            );
        }
    };
}
