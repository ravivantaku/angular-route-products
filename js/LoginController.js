myApp.controller("LoginCtrl", function($scope, $location, $timeout){
      $scope.users = [
          {username: "ravi", password: "ravi123", registerDate:""},
          {username: "raju", password: "raju529", registerDate:""}
      ];

  $scope.login = function(){
      console.log($scope.username);
      console.log($scope.password);
      var user = {username: $scope.username,password: $scope.password};
      var u = _.find($scope.users, user);
      if(u){
          window.location.href = "#/userproducts";
      }
      else{
          $scope.reset();
          alert("Enter proper username or password");
      }
  };
    $scope.reset = function(){
        $scope.username = "";
        $scope.password = ""
    };

});