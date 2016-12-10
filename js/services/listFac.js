(function() {
"use strict";

angular.module("ListFac", [])
.factory("listFac", function($http) {
  return {
    getList: function() {
      return $http.get("Users/Rasmus Dybmose/Desktop/bem/js/Data/listData.json");
    }
  }
})
})();
