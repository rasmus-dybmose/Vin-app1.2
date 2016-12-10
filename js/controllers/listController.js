(function() {
  "use strict";

angular.module("ListController", ["ListFac"])
.controller("listController", function($scope, listFac, $log) {
  listFac.getList()
          .success(
            function(list) {
              $scope.list = list;
          })
          .error(
            function(data, status, headers, config) {
              $log.warn(data, status, headers(), config)
          })
})
})();
