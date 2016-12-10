(function () {
  "use strict";
  angular.module("panelController", [])

  .controller("panelController", function($scope) {

    // her laver jeg en toggle view af et products spec
    // den starter med at være lukket
    $scope.isSelected = false;
    // hvis man klikker på functionen selectTab så åbner den
    $scope.selectTab = function() {
      if ($scope.isSelected === false) {
            $scope.isSelected = true;
      }
      else {
        // men hvis man klikker igen så skal den bare lukke
        $scope.isSelected = false;
      }
    };

  })
})();
