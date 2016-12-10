(function () {
  "use strict";
  angular.module("panelController", [])

  .controller("panelController", function($scope) {

    $scope.isSelected = false;

    $scope.selectTab = function() {
      if ($scope.isSelected === false) {
            $scope.isSelected = true;
      }
      else {
        $scope.isSelected = false;
      }
    };

  })
})();
