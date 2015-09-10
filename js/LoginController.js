myApp.controller("LoginCtrl", function($scope, $location, loginUserService){
      $scope.users = [
          {username: "ravi", password: "ravi123", registerDate:"", isAdmin: true},
          {username: "raju", password: "raju529", registerDate:"", isAdmin:false}
      ];

  $scope.login = function(){
      console.log($scope.username);
      console.log($scope.password);
      var user = {username: $scope.username,password: $scope.password};
      var u = _.find($scope.users, user);

      loginUserService.loginUser = u;
      console.log(loginUserService.getUser());
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