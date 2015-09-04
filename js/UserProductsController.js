myApp.controller("UserProductsCtrl", function($scope, loginUserService){
    $scope.userproducts = [
        {name: "Product1"},
        {name:"Product2"}
    ];
    $scope.loginUser = loginUserService.loginUser;
    console.log($scope.loginUser);
});