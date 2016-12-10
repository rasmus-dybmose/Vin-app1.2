(function() {
  "use strict";
  angular.module("appDirective", [])
  .directive("productCtrl", function() {
    return{
      restrict: "E",
      templateUrl: "productController.html"
    }
  })
  .directive("productFilter", function() {
    return{
      restrict: "E",
      templateUrl: "productFilter.html"
    }
  })
  .directive("productForm", function() {
    return{
      restrict: "E",
      templateUrl: "productForm.html"
    }
  })
})();
