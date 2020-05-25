module.exports = function ($parse) {
  return function (scope, element, attrs) {
    let fn = $parse(attrs.ngRightClick);
    element.bind('contextmenu', function (event) {
      scope.$apply(function () {
        event.preventDefault();
        fn(scope, {$event: event});
      });
    });
  };
};
