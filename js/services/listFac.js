(function() {
"use strict";

angular.module("ListFac", [])
.factory("listFac", function($http) {
  return {
    getList: function() {
      return $http.get("js/Data/listData.json");
    }
  }
});
})();
