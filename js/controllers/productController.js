(function() {
  "use strict";
  angular.module("ProductController", ["productFac","panelController"])
  .controller("productController", function($scope, $log, productData) {

// her laver jeg nogle filter instillinger
    $scope.sortby = "";
    $scope.orderby = "-Id";
    $scope.arrow = false;


    $scope.orderbyID = function() {
      // her laver jeg en toggle fuction som gør at når jeg klikker på en knappen så toggler den mellem de 2 værdier
      if ($scope.orderby === "-Id") {
         $scope.orderby = "Id";
         $scope.arrow = true;
      }
      else {
        $scope.orderby = "-Id";
        $scope.arrow = false;
      }
    }
// her henter jeg alle produkterne hvilket jeg bruger en custom made service til : productFac.js
    productData.getProducts()
      .success( // hvis det lykkes at hente produkterne skal de scopes ud
        function(product) {
          $scope.products = product;
      })
      .error( // hvis ikke det lykkes at hente produkterne laver vi en log i console om hvilke fejl og status der forkom
        function(data, status, headers, config) {
          $log.warn(data, status, headers(), config)
      })
// her tilføjer jeg et product når jeg clikker på en kanp som har funciton addName
      $scope.addName = function() {
        $scope.products.push({Products:{List:[{Name: $scope.product.name}]}})
        $scope.product.name = "";
      }
  })
})();
