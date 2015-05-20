angular.module('calculatorApp', []).controller('CalculatorController', function CalculatorController($scope) {
  $scope.z = 0;
  $scope.sum = function() {
    $scope.z = $scope.x + $scope.y;
  };
});
