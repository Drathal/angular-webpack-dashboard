export default /*@ngInject*/  function bindHtmlCompile($compile) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            scope.$watch(
                () => {
                    return scope.$eval(attrs['bindHtmlCompile']);
                },
                (value) => {
                    element.html(value && value.toString());
                    $compile(element.contents())(scope);
                }
            );
        }
    };
}
