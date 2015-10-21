app.controller("MainController", function($scope, userService){
  $scope.name="test";

  $scope.getUsers = function() {
    $scope.users = userService.getUsers();
  }

  $scope.getUsers();
})
