(function() {
  "use strict";

angular.module("productFac", [])

.factory("productData", ['$http', function($http) {
  return {
    getProducts: function() {
      return $http.get("users/Rasmus Dybmose/Desktop/bem/js/data/productData.json");
    }
  }
}])
})();
