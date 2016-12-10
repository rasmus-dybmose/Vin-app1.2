(function() {
  "use strict";

angular.module("productFac", [])

.factory("productData", function($http) {
  return {
      getProducts: function () {
          // her har jeg bare hentet den api som api.wine.com tilbyder
      return $http.get("js/data/productData.json");
    }
  }
});
})();
