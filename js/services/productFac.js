(function() {
  "use strict";

angular.module("productFac", [])

.factory("productData", function($http) {
  return {
    getProducts: function() {
      return $http.get("js/data/productData.json");
    }
  }
});
})();
