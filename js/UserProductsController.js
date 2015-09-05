myApp.controller("UserProductsCtrl", function($scope, loginUserService,$rootScope){
    $scope.userproducts = [
        {name: "Product1"},
        {name:"Product2"}
    ];
    $scope.userproducts.push($rootScope.userProduct);
    $scope.loginUser = loginUserService.loginUser;
    console.log($scope.loginUser);
});