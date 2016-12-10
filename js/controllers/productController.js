(function() {
  "use strict";
  angular.module("ProductController", ["productFac","panelController"])
  .controller("productController", function($scope, $log, productData) {

    $scope.sortby = "";
    $scope.orderby = "Id";

    $scope.orderbyID = function() {
      if ($scope.orderby === "Id") {
         $scope.orderby = "-Id";
      }
      else {
        $scope.orderby = "Id";
      }
    }

    productData.getProducts()
      .success(
        function(product) {
          $scope.products = product;
      })
      .error(
        function(data, status, headers, config) {
          $log.warn(data, status, headers(), config)
      })

      $scope.addName = function() {
        $scope.products.push({Products:{List:[{Name: $scope.product.name}]}})
      }
  })
})();
